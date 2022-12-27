<script lang="ts">
	import type { FaceTracker, FaceTrackerResult } from '$lib/@0xalter/mocap4face/advanced';
	import type { Nullable } from '$lib/@0xalter/mocap4face/mocap4face';
	import { onMount } from 'svelte';
	import { setupCamera, getDeviceInfos } from './camera';
	import { startTracking } from './tracking';
	import { Peer } from 'peerjs';

	interface Shape {
		name: string;
		value: number;
	}

	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let blendshapes: Shape[] = [];

	function onBlendshapeResult(result: Nullable<FaceTrackerResult>) {
		if (result == null) {
			return;
		}
		blendshapes = [];
		for (const [name, value] of result.blendshapes) {
			const fixedValue = parseFloat(value.toFixed(2));
			blendshapes.push({ name: name, value: fixedValue });
		}
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

			startTracking(videoElement, onBlendshapeResult);

			let peer = new Peer({ host: '/', port: 9000, path: '/' });
			peer.on('open', function (id) {
				console.log('My peer ID is: ' + id);
			});
			peer.on('connection', function (conn) {
				conn.on('open', function () {
					// Receive messages
					conn.on('data', function (data) {
						console.log('Received', data);
					});

					// Send messages
					conn.send('Hello!');
				});
			});
		});

		//change source when select changes
		videoSelect.onchange = () => {
			setupCamera(videoElement, videoSelect).then((camAvailable) => {
				if (!camAvailable) {
					console.log('No camera available');
					return;
				}
				startTracking(videoElement, onBlendshapeResult);
			});
		};
	});
</script>

<main>
	<div id="graphics">
		<div id="videoContainer">
			<video autoplay playsinline bind:this={videoElement} id="videoElement">
				<track kind="captions" />
			</video>
			<div id="overlay">
				<div id="rectangle" class="rect" style="display: none;" />
			</div>
			<div id="videoSource">
				<label for="videoSource"><h3 class="text-body">Source:&nbsp;</h3></label>
				<select bind:this={videoSelect} class="select-item">
					{#each deviceInfos as device}
						<option value={device.deviceId} kind="videoinput">{device.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<div id="result">
			{#each blendshapes as shape}
				<p>{shape.name}: {shape.value}</p>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
	}
	#graphics {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: 16px;
	}

	#overlay {
		position: absolute;
	}

	#videoContainer {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;

		border-radius: 16px;
		padding: 16px;
		background-image: var(--gradient-background);
		box-shadow: var(--shadow-1);

		overflow: hidden;
	}

	#videoElement {
		width: 100%;
		height: 100%;
	}

	#videoSource {
		position: absolute;
		top: 0;
	}

	#result {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;

		border-radius: 16px;
		padding: 16px;
		background-image: var(--gradient-background);
		box-shadow: var(--shadow-1);

		overflow-y: scroll;
	}

	@media (min-width: 768px) {
		#graphics {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
	}
</style>
