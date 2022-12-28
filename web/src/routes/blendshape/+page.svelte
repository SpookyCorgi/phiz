<script lang="ts">
	import type { FaceTracker, FaceTrackerResult } from '$lib/@0xalter/mocap4face/advanced';
	import type { Nullable } from '$lib/@0xalter/mocap4face/mocap4face';
	import { onMount } from 'svelte';
	import { setupCamera, getDeviceInfos } from './camera';
	import { startTracking } from './tracking';
	import { Peer } from 'peerjs';
	import type {DataConnection} from 'peerjs';
	import { page } from '$app/stores';

	interface Shape {
		name: string;
		value: number;
	}

	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];

	let connectionLink: string;
	let dataConnection : DataConnection|null = null;
	let blendshapes: Shape[] = [];

	function onBlendshapeResult(result: Nullable<FaceTrackerResult>) {
		if (result == null) {
			return;
		}
		let arrFloat: number[] = [];
		blendshapes = [];
		for (const [name, value] of result.blendshapes) {
			let fixedValue=Math.round(value *100 )
			blendshapes.push({ name: name, value: fixedValue/100 });
			arrFloat.push(fixedValue)
		}

		let data = new Uint8Array(arrFloat);

		if (dataConnection != null) {
			dataConnection.send(data);
			console.log('sent', data)
		}
	}

	function copyLink(){
		navigator.clipboard.writeText(connectionLink).then(
			()=>{
				alert('Copied to clipboard')
				}	,
			()=>{}
		)

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
			//let peer = new Peer();
			peer.on('open', function (id) {
				let url = new URL($page.url.origin);
				url.port = ''
				connectionLink = url.toString()+'?id='+id;
				console.log('My peer ID is: ' + id);
			});
			peer.on('connection', function (conn) {
				dataConnection = conn
				conn.on('open', function () {
					// Receive messages
					conn.on('data', function (data) {
						console.log('Received', data);
					});
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
	<div id="videoSource">
		<label for="videoSource"><h3 class="text-body">Source:&nbsp;</h3></label>
		<select bind:this={videoSelect} class="select-item">
			{#each deviceInfos as device}
				<option value={device.deviceId} kind="videoinput">{device.label}</option>
			{/each}
		</select>
	</div>
	<div id="graphics">
		<div id="videoContainer">
			<video autoplay playsinline bind:this={videoElement} id="videoElement">
				<track kind="captions" />
			</video>
			<div id="overlay">
				<div id="rectangle" class="rect" style="display: none;" />
			</div>
		</div>

		<div id="result">
			{#each blendshapes as shape}
				<p>{shape.name}: {shape.value}</p>
			{/each}
		</div>
	</div>

	<div id="link-info">
		<h3 id="link-description">Use the link to connect to this page. Click to copy.</h3>
		<h3 class="link" on:click={copyLink} on:keypress={copyLink}>{connectionLink}</h3>
	</div>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex; 
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#graphics {
		position: relative;
		width: 100%;
		height: 50%;
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
		width:100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding-left: 16px;
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

	#link-info{
		width: 100%;
		padding-left: 16px;

	}

	#link-description{
		padding-left: 8px;
	}
	.link{
		cursor: copy;
		background-color: var(--secondary-background);
		padding: 8px;
	}

	.link:hover{
		color: var(--font-color-hover);
	}
	@media (min-width: 768px) {
		#graphics {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		#result{
			width: 33%;
			height: 100%;
			aspect-ratio: 2/3;
		}

		#videoContainer {
			width: 66%;
			height: 100%;
			aspect-ratio: 4/3;
		}
	}
</style>
