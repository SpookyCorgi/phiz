<script lang="ts">
	//types
	import type { FaceTrackerResult, Nullable } from '$lib/@0xalter/mocap4face/advanced';
	import type { DataConnection } from 'peerjs';
	//svelte
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	//code
	import { setupCamera, getDeviceInfos } from './camera';
	import { createPeer } from './peer';
	import { arkitBlendshapeNames } from '../../../../lib/blendshapes';

	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	//types
	interface ShapeFrame {
		shapes: Map<string, number>;
		time: number;
	}

	//public variables for svelte
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let connectionLink: string;
	let dataConnection: DataConnection | null = null;
	let blendshapes: Map<string, number> = new Map();
	let overlay: HTMLDivElement;
	let rectangle: HTMLDivElement;
	let fps: string = '';

	let smoothBin: number = 0.1;
	const smoothQueueSize: number = 60;
	let smoothFrames: number = 0;

	let storedData: ShapeFrame[] = [];

	let eyeSensitivity: number = 0.8;
	let eyeRotateLimit: { [key: string]: number } = { up: 28.0, down: 47.0, in: 45.0, out: 45.0 };

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

	// function getTrimmedTime() {
	// 	const date = new Date();
	// 	let time = date.getTime();
	// 	let second = Math.floor(time / 1000) - Math.floor(time / 100000) * 100;
	// 	let hundredth = Math.round((time - Math.floor(time / 1000) * 1000) / 10);
	// 	if (hundredth === 100) {
	// 		second += 1;
	// 		hundredth = 0;
	// 	}
	// 	return [second, hundredth];
	// }

	function dataSmoother(current: ShapeFrame): ShapeFrame {
		//add current data to storedData
		storedData.push(current);
		//remove oldest data if storedData is longer than queue size
		if (storedData.length > smoothQueueSize) {
			storedData.shift();
		}
		//calculate average
		let average: ShapeFrame = {
			shapes: new Map<string, number>(),
			time: current.time
		};
		for (let [name, value] of current.shapes.entries()) {
			let sum = 0;
			let j = storedData.length - 1;
			//go through all data within the time frame
			while (j >= 0 && current.time - storedData[j].time < 1000 * smoothBin) {
				sum += storedData[j].shapes.get(name) ?? 0;
				j--;
			}
			let count = storedData.length - j - 1;
			//if no data is available, use the current value
			if (count === 0) {
				sum = value;
				count = 1;
			}
			smoothFrames = count;
			//average.shapes.set(name, Math.round((sum / count) * 100));
			average.shapes.set(name, sum / count);
		}
		return average;
	}

	function getEyeRotation(
		current: Map<string, number>
	): [[number, number, number, number], [number, number, number, number]] {
		let directions = ['up', 'down', 'in', 'out'];
		let rightRotation: number[] = [];
		let leftRotation: number[] = [];
		//turning eye look value into rotation
		for (const direction of directions) {
			let shape = 'eyeLook' + direction.charAt(0).toUpperCase() + direction.slice(1);
			rightRotation.push(current.get(shape + '_R')! * eyeRotateLimit[direction] * eyeSensitivity);
			leftRotation.push(current.get(shape + '_L')! * eyeRotateLimit[direction] * eyeSensitivity);
		}
		//left eye rotation in radians x(down-up) and y(out-in)
		let leftRotY = ((leftRotation[3] - leftRotation[2]) / 180) * Math.PI;
		let leftRotX = ((leftRotation[1] - leftRotation[0] + 90) / 180) * Math.PI;
		//right eye rotation in radians x(up-down) and y(in-out)
		let rightRotY = ((rightRotation[2] - rightRotation[3]) / 180) * Math.PI;
		let rightRotX = ((rightRotation[1] - rightRotation[0] + 90) / 180) * Math.PI;

		//get the spherical coordinates of the eye rotation
		let leftY = Math.cos(leftRotX);
		let leftX = Math.sin(leftRotX) * Math.sin(leftRotY);
		let leftZ = Math.sin(leftRotX) * Math.cos(leftRotY);

		let rightY = Math.cos(rightRotX);
		let rightX = Math.sin(rightRotX) * Math.sin(rightRotY);
		let rightZ = Math.sin(rightRotX) * Math.cos(rightRotY);

		return [
			[leftX, leftY, leftZ, 0],
			[rightX, rightY, rightZ, 0]
		];
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

		//get blendshape values
		let values = new Map<string, number>();
		for (const [name, value] of result.blendshapes) {
			//clamp value to 0.0~1.0
			values.set(name, Math.max(0, Math.min(1, value)));
		}
		//apply smoothing
		let smoothedResult = dataSmoother({ shapes: values, time: Date.now() });
		//map result to arkit names
		let arkitBlendshapes = [];
		for (let [arkitName, mocapName] of arkitBlendshapeNames) {
			let value = 0;
			if (arkitName === 'browInnerUp') {
				let left = smoothedResult.shapes.get('browInnerUp_L') ?? 0;
				let right = smoothedResult.shapes.get('browInnerUp_R') ?? 0;
				value = (left + right) / 2;
			}
			value = smoothedResult.shapes.get(mocapName) ?? 0;
			arkitBlendshapes.push(value);

			if (mocapName) {
				blendshapes.set(arkitName, value);
			}
		}
		//display
		blendshapes = blendshapes;
		let dataBlendshapes = new Float32Array(arkitBlendshapes);

		//estimate eye rotation based on not smoothed eye blendshapes
		let [leftEye, rightEye] = getEyeRotation(values);
		let dataLeftEye = new Float32Array(leftEye);
		let dataRightEye = new Float32Array(rightEye);

		//get head rotation in quaternion
		let rotation = result.rotationQuaternion.xyzw;
		let dataHead = new Float32Array([rotation.x, rotation.y, rotation.z, rotation.w]);

		//get time
		let date = new Date();
		let dataTime = new Uint16Array([date.getSeconds(), date.getMilliseconds()]);

		//create sendable data
		let data = {
			connection: true,
			blendshapes: dataBlendshapes,
			leftEyeRotation: dataLeftEye,
			rightEyeRotation: dataRightEye,
			headRotation: dataHead,
			time: dataTime
		};
		//send data
		if (dataConnection != null) {
			dataConnection.send(data);
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

	onMount(async () => {
		//mocap4face is not side effect free, so we need to import it dynamically
		const { startTracking } = await import('./tracking');
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
				(id: string) => {
					let url = new URL($page.url.origin);
					url.port = '';
					//for current version use simple id
					//connectionLink = url.toString() + '?id=' + id;
					connectionLink = id;
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

<main class="p-4 w-full h-full flex flex-col items-center">
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
			<video autoplay playsinline bind:this={videoElement} class="z-0">
				<track kind="captions" />
			</video>
			<div id="overlay" bind:this={overlay} class="absolute z-10">
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
			{#each [...blendshapes] as [key, value]}
				<div class="flex gap-2 justify-end">
					<p>{key}:</p>
					<p class="w-8">{value.toFixed(2)}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="w-full max-w-[640px] lg:max-w-[896px] mb-2 card p-2">
		<div class="flex gap-2">
			<span>Smoothing:</span>
			<RangeSlider bind:value={smoothBin} min={0} max={0.5} step={0.01} />
			<span class="text-secondary-500"> {smoothBin.toFixed(2)}</span>
			<span> second</span>
		</div>
		<div>
			<span>Output value is the average of the past</span>
			<span class="text-secondary-500">{smoothFrames} </span>
			<span>frames</span>
		</div>
	</div>

	<div id="link-info" class="w-full max-w-[640px] lg:max-w-[896px]">
		<h3 id="link-description" class="">Copy your code to the app. Click to copy.</h3>
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
