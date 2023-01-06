<script lang="ts">
	//types
	import type { FaceTrackerResult, Nullable, Rect } from '$lib/@0xalter/mocap4face/advanced';
	import type { DataConnection } from 'peerjs';
	//svelte
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	//code
	import { setupCamera, getDeviceInfos } from './camera';
	import { startTracking } from './tracking';
	import { createPeer } from './peer';

	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	//types
	interface Shape {
		name: string;
		value: number;
	}
	//public variables for svelte
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let connectionLink: string;
	let dataConnection: DataConnection | null = null;
	let blendshapes: Shape[] = [];
	let overlay: HTMLDivElement;
	let rectangle: HTMLDivElement;
	let fps: string = '';

	function setFaceRectangle(result: FaceTrackerResult) {
		const rect = result.faceRectangle;
		if (rect == null) {
			rectangle.style.display = 'none';
			return;
		}

		let imageRatio = result.inputImageSize.x / result.inputImageSize.x;
		let clientRatio = videoElement.clientWidth / videoElement.clientHeight;
		let scale: number,
			offsetLeft: number = 0,
			offsetTop: number = 0;
		if (imageRatio > clientRatio) {
			scale = videoElement.clientWidth / result.inputImageSize.x;
			offsetTop = (videoElement.clientHeight - result.inputImageSize.y * scale) / 2;
		} else {
			scale = videoElement.clientHeight / result.inputImageSize.y;
			offsetLeft = (videoElement.clientWidth - result.inputImageSize.x * scale) / 2;
		}

		overlay.style.left = videoElement.offsetLeft + 'px';
		overlay.style.top = videoElement.offsetTop + 'px';
		overlay.style.width = videoElement.clientWidth + 'px';
		overlay.style.height = videoElement.clientHeight + 'px';

		//set face rect
		rect
			.flipY(result.inputImageSize.y)
			.normalizeBy(result.inputImageSize)
			.scale(videoElement.clientWidth, videoElement.clientHeight)
			.scaleAroundCenter(0.8, 0.8);

		rectangle.style.display = 'block';
		rectangle.style.position = 'relative';
		rectangle.style.left = (rect.x * scale + offsetLeft).toString() + 'px';
		rectangle.style.top =
			(videoElement.clientHeight - rect.y * scale - rect.height * scale + offsetTop).toString() +
			'px';

		rectangle.style.width = (rect.width * scale).toString() + 'px';
		rectangle.style.height = (rect.height * scale).toString() + 'px';
	}

	function getTime() {
		const date = new Date();
		let time = date.getTime();
		let second = Math.floor(time / 1000) - Math.floor(time / 100000) * 100;
		let hundredth = Math.round((time - Math.floor(time / 1000) * 1000) / 10);
		if (hundredth === 100) {
			second += 1;
			hundredth = 0;
		}
		return [second, hundredth];
	}

	//callback for face tracking
	function onBlendshapeResult(result: Nullable<FaceTrackerResult>) {
		if (result == null) {
			if (rectangle != null) {
				rectangle.style.display = 'none';
			}
			return;
		}
		setFaceRectangle(result);

		blendshapes = [];
		let arrFloat: number[] = [];
		for (const [name, value] of result.blendshapes) {
			let fixedValue = Math.round(value * 100);
			blendshapes.push({ name: name, value: (fixedValue / 100).toFixed(2) });
			arrFloat.push(fixedValue);
		}
		let [second, hundredth] = getTime();
		arrFloat.push(second, hundredth);
		let b = new Uint8Array(arrFloat);

		if (dataConnection != null) {
			dataConnection.send(b);
			//console.log(dataConnection.bufferSize)
		}
	}
	function triggerToast(): void {
		const t: ToastSettings = {
			message: 'Link copied to clipboard',
			// Optional: Presets for primary | secondary | tertiary | warning
			preset: 'primary',
			// Optional: The auto-hide settings
			autohide: true,
			timeout: 5000
		};
		toastStore.trigger(t);
	}

	function copyLink() {
		navigator.clipboard.writeText(connectionLink).then(
			() => {
				triggerToast();
			},
			() => {}
		);
	}

	function getFPS(receivedFps: number) {
		fps = receivedFps.toFixed(0);
	}

	onMount(() => {
		//get available device first in case all devices are occupied and return error later
		getDeviceInfos().then((d) => (deviceInfos = d));

		//setup webcam with video source constraints
		setupCamera(videoElement, videoSelect).then((camAvailable) => {
			if (!camAvailable) {
				console.log('No camera available');
				return;
			}

			startTracking(videoElement, onBlendshapeResult, getFPS);
			createPeer(
				'/',
				9000,
				'/',
				(id: string) => {
					let url = new URL($page.url.origin);
					url.port = '';
					connectionLink = url.toString() + '?id=' + id;
				},
				(conn: DataConnection) => {
					dataConnection = conn;
				}
			);
		});

		//change source when select changes
		videoSelect.onchange = () => {
			setupCamera(videoElement, videoSelect).then((camAvailable) => {
				if (!camAvailable) {
					console.log('No camera available');
					return;
				}
				startTracking(videoElement, onBlendshapeResult, getFPS);
			});
		};
	});
</script>

<main class="p-4 w-full flex flex-col items-center">
	<div class="flex w-full max-w-[640px] lg:max-w-[896px] pl-2">
		<label for="videoSource"><p>Source:&nbsp;</p></label>
		<select bind:this={videoSelect} class="w-[240px] mb-2">
			{#each deviceInfos as device}
				<option value={device.deviceId} class="text-sm">{device.label}</option>
			{/each}
		</select>
	</div>
	<div class="w-full flex justify-center gap-4 mb-2">
		<div
			id="videoContainer"
			class="relative card rounded-container-token aspect-square w-full h-full max-w-[640px] max-h-[640px] overflow-hidden flex items-center justify-center"
		>
			<video autoplay playsinline bind:this={videoElement}>
				<track kind="captions" />
			</video>
			<div id="overlay" bind:this={overlay} class="absolute">
				<div
					id="rectangle"
					bind:this={rectangle}
					class="rounded-container-token border-token border-primary-500"
					style="display: none;"
				/>
			</div>
			<div id="fps" class="absolute top-2 left-2">
				<h3>{fps}</h3>
			</div>
		</div>

		<div
			id="result"
			class="w-[240px] p-4 card overflow-y-scroll max-h-[640px] hidden lg:flex flex-col"
		>
			{#each blendshapes as shape}
				<div class="flex gap-2 justify-end">
					<p>{shape.name}:</p>
					<p class="w-8">{shape.value}</p>
				</div>
			{/each}
		</div>
	</div>

	<div id="link-info" class="w-full max-w-[640px] lg:max-w-[896px]">
		<h3 id="link-description" class="">Share the link to the app. Click to copy.</h3>
		<h3
			class="link bg-primary-backdrop-token rounded-container-token p-2"
			on:click={copyLink}
			on:keypress={copyLink}
		>
			{connectionLink}
		</h3>
	</div>
</main>

<style>
</style>
