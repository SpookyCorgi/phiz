<script lang="ts">
	//types
	import type { DataConnection } from 'peerjs';
	import type { TrackingResult } from '$lib/tracking';
	//svelte
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Websocket from '$lib/websocket/websocket.svelte';
	import Footer from '$lib//footer/footer.svelte';
	//code
	import { setupCamera, getDeviceInfos } from '$lib/camera';
	import { arkitBlendshapeMap } from '../../../../lib/blendshapes';
	//import { startTracking } from '$lib/tracking';
	import { dataSmoother, type ShapeFrame } from '$lib/utils';

	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { ProgressRadial, FileDropzone } from '@skeletonlabs/skeleton';

	import UAParser from 'ua-parser-js';
	//import exampleVideo from '$lib/assets/exampleVideo.mp4';

	//public variables for svelte
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let videoContainer: HTMLDivElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let connectionLink: string;
	let dataConnection: DataConnection | null = null;
	let blendshapes: Map<string, number> = new Map();
	let overlay: HTMLDivElement;
	let rectangle: HTMLDivElement;
	let rectangleText: HTMLSpanElement;
	let fps: string = '';
	let packageCount: number = 0;
	let dataOutputMode: string = 'webrtc';
	let trackerLoading: boolean = true;
	const videoMode: boolean = false;

	let smoothBin: number = 0.05;

	let smoothFrames: number = 0;

	let storedData: ShapeFrame[] = [];

	let eyeSensitivity: number = 0.8;
	let eyeRotateLimit: { [key: string]: number } = { up: 28.0, down: 47.0, in: 45.0, out: 45.0 };

	let websocket: any;
	let websocketOpen: boolean;

	let enableMediapipe: boolean = false;

	let setMediapipeState: Function | null = null;
	function mediapipeStateChanged() {
		if (setMediapipeState) {
			setMediapipeState(enableMediapipe);
		}
	}

	function setFaceRectangle(
		rect: { x: number; y: number; width: number; height: number },
		inputImageSize: { x: number; y: number }
	) {
		if (rect == null) {
			rectangle.style.display = 'none';
			return;
		}

		let imageRatio = inputImageSize.x / inputImageSize.y;
		let clientRatio = videoElement.clientWidth / videoElement.clientHeight;
		let scale: number,
			offsetLeft: number = 0,
			offsetTop: number = 0;
		if (imageRatio > clientRatio) {
			scale = videoElement.clientHeight / inputImageSize.y;
			offsetLeft = (inputImageSize.x * scale - videoElement.clientWidth) / 2;
		} else {
			scale = videoElement.clientWidth / inputImageSize.x;
			offsetTop = (inputImageSize.y * scale - videoElement.clientHeight) / 2;
		}

		overlay.style.left = videoElement.offsetLeft + 'px';
		overlay.style.top = videoElement.offsetTop + 'px';
		overlay.style.width = videoElement.clientWidth + 'px';
		overlay.style.height = videoElement.clientHeight + 'px';

		//set face rect
		// rect
		// 	.scale(videoElement.clientWidth, videoElement.clientHeight)
		// 	.scaleAroundCenter(0.8, 0.8);
		//flip y
		let rectScale = 0.8;
		rect.x += ((1 - rectScale) / 2) * rect.width;
		rect.y += ((1 - rectScale) / 2) * rect.height;
		rect.width *= 0.8;
		rect.height *= 0.8;
		//console.log(rect.y);
		rectangle.style.display = 'block';
		rectangle.style.position = 'relative';
		rectangle.style.left = (rect.x * scale - offsetLeft).toString() + 'px';
		rectangle.style.top =
			(videoElement.clientHeight - rect.y * scale - rect.height * scale + offsetTop).toString() +
			'px';
		rectangle.style.width = (rect.width * scale).toString() + 'px';
		rectangle.style.height = (rect.height * scale).toString() + 'px';
		if (
			(imageRatio > 1 && rect.height < inputImageSize.y / 2) ||
			(imageRatio < 1 && rect.width < inputImageSize.x / 2)
		) {
			if (rectangle.classList.contains('border-success-500')) {
				rectangle.classList.remove('border-success-500');
			}
			rectangle.classList.add('border-error-500');
			rectangleText.style.display = 'block';
		} else {
			if (rectangle.classList.contains('border-error-500')) {
				rectangle.classList.remove('border-error-500');
			}
			rectangle.classList.add('border-success-500');
			rectangleText.style.display = 'none';
		}
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
	function onBlendshapeResult(result: TrackingResult) {
		if (result == null) {
			if (rectangle != null) {
				rectangle.style.display = 'none';
			}
			return;
		}
		setFaceRectangle(result.rect, result.inputImageSize);

		//get blendshape values
		let values = result.blendshapes;

		//map result to arkit names
		let arkitBlendshapes: Map<string, number> = new Map();
		for (let [arkitName, mocapName] of arkitBlendshapeMap) {
			let value = 0;
			value = values.get(mocapName) ?? 0;
			if (arkitName === 'browInnerUp') {
				let left = values.get('browInnerUp_L') ?? 0;
				let right = values.get('browInnerUp_R') ?? 0;
				value = (left + right) / 2;
			}
			if (result.mediaPipeData) {
				if (result.mediaPipeData.get(arkitName) != undefined) {
					if (value == 0) {
						value = result.mediaPipeData.get(arkitName)!;
					} else {
						//google mediapipe is too volatile for eyes
						if (arkitName.includes('eye')) {
							console.log(arkitName);
							value = value * 0.65 + result.mediaPipeData.get(arkitName)! * 0.35;
						} else {
							value = value * 0.35 + result.mediaPipeData.get(arkitName)! * 0.65;
						}
					}
				}
			}
			arkitBlendshapes.set(arkitName, value);
		}

		//apply smoothing
		let smoothedResult;
		[smoothedResult, smoothFrames] = dataSmoother(
			{ shapes: arkitBlendshapes, time: Date.now() },
			storedData,
			smoothBin
		);

		//set web display values
		blendshapes = smoothedResult.shapes;
		blendshapes = blendshapes;

		//set blendshape data for sending
		let dataBlendshapes = new Float32Array(Array.from(smoothedResult.shapes.values()));

		//estimate eye rotation based on not smoothed eye blendshapes
		let [leftEye, rightEye] = getEyeRotation(values);
		let dataLeftEye = new Float32Array(leftEye);
		let dataRightEye = new Float32Array(rightEye);

		//get head rotation in quaternion
		let dataHead = new Float32Array([
			result.rotation.x,
			result.rotation.y,
			result.rotation.z,
			result.rotation.w
		]);

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
			time: dataTime,
			packageCount: packageCount
		};
		//send data
		if (dataConnection != null) {
			packageCount++;
			data.packageCount = packageCount;
			dataConnection.send(data);
		}

		if (websocketOpen) {
			websocket.sendWebsocketMessage('/phiz/blendshapes', ...dataBlendshapes);
			websocket.sendWebsocketMessage('/phiz/headRotation', ...dataHead);
			websocket.sendWebsocketMessage('/phiz/leftEyeRotation', ...dataLeftEye);
			websocket.sendWebsocketMessage('/phiz/rightEyeRotation', ...dataRightEye);
		}
	}

	function triggerToast(): void {
		const t: ToastSettings = {
			message: 'Link copied to clipboard',
			background: 'primary',
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

	function trackerLoaded() {
		trackerLoading = false;
	}

	onMount(async () => {
		//tfjslite has side effects, so we need to import it dynamically
		const { startTracking, mediapipeState } = await import('$lib/tracking');
		const { createPeer } = await import('./peer');
		setMediapipeState = mediapipeState;
		//detect device!
		const uaParser = new UAParser();
		let detectedBrowser = uaParser.getBrowser();
		let detectedDevice = uaParser.getDevice();
		let detectedOs = uaParser.getOS();
		if (!detectedDevice.type) {
			//detect type desktop
			dataOutputMode = 'websocket';
		} else {
			dataOutputMode = 'webrtc';
		}

		//set video container aspect ratio cuz safari is stupid
		if (detectedBrowser.name == 'Mobile Safari') {
			videoContainer.style.height = `${videoContainer.clientWidth}px`;
			window.addEventListener('resize', () => {
				videoContainer.style.height = `${videoContainer.clientWidth}px`;
			});
		}
		//mocap4face is not side effect free, so we need to import it dynamically
		//const { startTracking } = await import('./tracking');
		//get available device first in case all devices are occupied and return error later
		//getDeviceInfos().then((d) => (deviceInfos = d));

		if (videoMode) {
			startTracking(videoElement, onBlendshapeResult, getFPS, trackerLoaded);
			createPeer(
				(id: string) => {
					let url = new URL($page.url.origin);
					url.port = '';
					//for current version use simple id
					//connectionLink = url.toString() + '?id=' + id;
					connectionLink = id;
				},
				(conn: DataConnection) => {
					packageCount = 0;
					dataConnection = conn;
				}
			);
		} else {
			//setup webcam with video source constraints
			setupCamera(videoElement, videoSelect).then((infos) => {
				if (infos.length == 0) {
					console.log('No camera available');
					return;
				}
				//get device list here because ios safari sucks and only show info after get user media
				deviceInfos = infos;
				trackerLoading = true;

				startTracking(videoElement, onBlendshapeResult, getFPS, trackerLoaded);
				createPeer(
					(id: string) => {
						let url = new URL($page.url.origin);
						url.port = '';
						//for current version use simple id
						//connectionLink = url.toString() + '?id=' + id;
						connectionLink = id;
					},
					(conn: DataConnection) => {
						packageCount = 0;
						dataConnection = conn;
					}
				);
			});
		}

		//change source when select changes
		videoSelect.onchange = () => {
			if (!videoMode) {
				setupCamera(videoElement, videoSelect).then((infos) => {
					if (infos.length == 0) {
						console.log('No camera available');
						return;
					}
					trackerLoading = true;
					startTracking(videoElement, onBlendshapeResult, getFPS, trackerLoaded);
				});
			}
		};
	});
</script>

<main class="w-full h-full flex flex-col items-center overflow-y-auto">
	<div class="px-4">
		<div class="w-full flex justify-center gap-2 mt-4">
			<div class="card w-full max-w-[640px] max-h-[720px] flex flex-col">
				<div class="flex w-full p-2 items-center">
					<label for="videoSource"><p>Source:&nbsp;</p></label>
					<select bind:this={videoSelect} class="w-[240px] select">
						{#each deviceInfos as device}
							<option value={device.deviceId} class="text-sm">{device.label}</option>
						{/each}
					</select>
				</div>
				<div
					bind:this={videoContainer}
					class="relative rounded-container-token aspect-square w-full overflow-hidden flex items-center justify-center p-2"
				>
					{#if videoMode}
						<!-- <video
							autoplay
							playsinline
							muted
							loop
							bind:this={videoElement}
							class="z-0 object-cover h-full w-full"
							src={exampleVideo}
						>
						</video> -->
					{:else}
						<video
							autoplay
							playsinline
							muted
							bind:this={videoElement}
							class="z-0 object-cover h-full w-full"
						>
							<!-- <track kind="captions" /> -->
						</video>
					{/if}

					<div id="overlay" bind:this={overlay} class="absolute z-10 overflow-hidden">
						<div
							id="rectangle"
							bind:this={rectangle}
							class="rounded-container-token border-token"
							style="display: none;"
						>
							<span bind:this={rectangleText} class="text-error-500 absolute -bottom-6"
								>Please get closer</span
							>
						</div>
					</div>
					<div id="fps" class="absolute top-2 left-2">
						<h3>FPS: {fps}</h3>
					</div>
					{#if trackerLoading}
						<div
							class="w-full h-full z-50 bg-surface-900/80 absolute flex flex-col items-center justify-center"
						>
							<ProgressRadial
								stroke={48}
								meter="stroke-primary-500"
								track="stroke-primary-500/30"
								class="w-48 h-48"
							/>
							<p>Loading face tracker...</p>
						</div>
					{/if}
				</div>
			</div>

			<div
				id="result"
				class="w-[252px] p-4 card overflow-y-scroll max-h-[720px] hidden lg:flex flex-col"
			>
				{#each [...blendshapes] as [key, value]}
					<div class="flex gap-2 justify-end">
						<p>{key}:</p>
						<p class="w-8">{value.toFixed(2)}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-full max-w-[640px] lg:max-w-[900px] card mt-2 p-2">
			<div class="flex gap-2">
				<span>Smoothing:</span>
				<RangeSlider name="range-slider" bind:value={smoothBin} min={0} max={0.5} step={0.01} />
				<span class="text-secondary-500"> {smoothBin.toFixed(2)}</span>
				<span> second</span>
			</div>
			<div>
				<span>Output value is the average of the past</span>
				<span class="text-secondary-500">{smoothFrames} </span>
				<span>frames</span>
			</div>
			<label class="flex items-center space-x-2 mt-2">
				<input
					class="checkbox"
					type="checkbox"
					bind:checked={enableMediapipe}
					on:change={mediapipeStateChanged}
				/>
				<p>Enhanced sensitive motion capture</p>
			</label>
			<div>
				(Warning: Unstable during head turning and might have poor performance on mobile devices.)
			</div>
		</div>
		<div class="card p-2 flex flex-col w-full max-w-[640px] lg:max-w-[900px] items-start mt-2">
			<RadioGroup active="variant-filled-primary">
				<RadioItem bind:group={dataOutputMode} name="webrtc" value="webrtc"
					><span>Remote</span></RadioItem
				>
				<RadioItem bind:group={dataOutputMode} name="webrtc" value="websocket"
					><span>Local</span></RadioItem
				>
			</RadioGroup>

			{#if dataOutputMode === 'websocket'}
				<h3 class="mt-2">WebSocket Mode</h3>
				<Websocket bind:websocket bind:websocketOpen />
			{:else if dataOutputMode === 'webrtc'}
				<div id="link-info" class="w-full mt-2">
					<h3>WebRTC Mode</h3>
					<p id="link-description" class="">
						Paste this code on the device with the receive page open to receive data. Click to copy.
					</p>
					<h3
						class="link bg-primary-backdrop-token rounded-container-token p-2 mt-2"
						on:click={copyLink}
						on:keypress={copyLink}
					>
						{connectionLink}
					</h3>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex-grow" />
	<div class="w-full mt-12">
		<hr />
		<Footer className="w-full max-w-[640px] lg:max-w-[900px]" />
	</div>
</main>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
