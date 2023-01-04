<script lang="ts">
	//types
	import type { FaceTrackerResult,Nullable, Rect } from '$lib/@0xalter/mocap4face/advanced';
	import type {DataConnection} from 'peerjs';
	//svelte
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	//code
	import { setupCamera, getDeviceInfos } from './camera';
	import { startTracking } from './tracking';
	import { createPeer } from './peer';

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
	let dataConnection : DataConnection|null = null;
	let blendshapes: Shape[] = [];
	let overlay: HTMLDivElement;
	let rectangle: HTMLDivElement;
	let fps: string = '';

	function setFaceRectangle(result: FaceTrackerResult){
		const rect = result.faceRectangle
		if(rect == null){
			rectangle.style.display = 'none'
			return
		}

		let imageRatio = result.inputImageSize.x / result.inputImageSize.x
		let clientRatio = videoElement.clientWidth / videoElement.clientHeight
		let scale:number, offsetLeft:number = 0, offsetTop:number = 0;
		if(imageRatio > clientRatio){
			scale = videoElement.clientWidth / result.inputImageSize.x
			offsetTop = (videoElement.clientHeight - result.inputImageSize.y*scale)/2
		}else{
			scale = videoElement.clientHeight / result.inputImageSize.y
			offsetLeft = (videoElement.clientWidth - result.inputImageSize.x*scale)/2
		}


		overlay.style.left = videoElement.offsetLeft + 'px'
		overlay.style.top = videoElement.offsetTop + 'px'
		overlay.style.width = videoElement.clientWidth + 'px'
		overlay.style.height = videoElement.clientHeight + 'px'

		//set face rect
		rect.flipY(result.inputImageSize.y)
			.normalizeBy(result.inputImageSize)
			.scale(videoElement.clientWidth, videoElement.clientHeight)
			.scaleAroundCenter(0.8, 0.8)



		rectangle.style.display = 'block'
		rectangle.style.position = 'relative'
		rectangle.style.left = (rect.x*scale + offsetLeft).toString() + 'px'
		rectangle.style.top = (videoElement.clientHeight-rect.y*scale - rect.height*scale +offsetTop).toString() + 'px'
		
		rectangle.style.width = (rect.width*scale).toString() + 'px'
		rectangle.style.height = (rect.height*scale).toString() + 'px'
	}

	function getTime(){
		const date = new Date();
		let time = date.getTime();
		let second = Math.floor(time/1000) - Math.floor(time/100000)*100
		let hundredth = Math.round((time - Math.floor(time/1000)*1000)/10)
		if(hundredth === 100){
			second += 1
			hundredth = 0
		}
		return [second, hundredth]
	}

	//callback for face tracking
	function onBlendshapeResult(result: Nullable<FaceTrackerResult>) {
		if (result == null) {
			if(rectangle != null){
				rectangle.style.display = 'none'
			}
			return;
		}
		setFaceRectangle(result)

		blendshapes = [];
		let arrFloat: number[] = [];
		for (const [name, value] of result.blendshapes) {
			let fixedValue=Math.round(value *100 )
			blendshapes.push({ name: name, value: fixedValue/100 });
			arrFloat.push(fixedValue)
		}
		let [second,hundredth] = getTime()
		arrFloat.push(second, hundredth)
		let b = new Uint8Array(arrFloat);

		if (dataConnection != null) {
			dataConnection.send(b);
			//console.log(dataConnection.bufferSize)
		}
	}

	function copyLink(){
		navigator.clipboard.writeText(connectionLink).then(
			()=>{
				alert('Copied to clipboard')
			},
			()=>{}
		)
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
			createPeer('/',9000,'/',
				(id:string)=>{
					let url = new URL($page.url.origin);
					url.port = ''
					connectionLink = url.toString() + '?id=' + id;
				},
				(conn: DataConnection)=>{
					dataConnection = conn
				}
			)
			
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

<main>
	<div id="videoSource">
		<label for="videoSource"><h3 class="text-body">Source:&nbsp;</h3></label>
		<select bind:this={videoSelect} class="select-item">
			{#each deviceInfos as device}
				<option value={device.deviceId}>{device.label}</option>
			{/each}
		</select>
	</div>
	<div id="graphics">
		<div id="videoContainer">
			<video autoplay playsinline bind:this={videoElement} id="videoElement">
				<track kind="captions" />
			</video>
			<div id="overlay" bind:this={overlay}>
				<div id="rectangle" bind:this={rectangle} class="rect" style="display: none;" />
			</div>
			<div id="fps">
				<h3>{fps}</h3>
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
		width: 100%;
		height: 100%;
	}

	#fps{
		position: absolute;
		top: 0px;
		left: 32px;
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

		display: none;
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

	#rectangle{
		border: 4px solid var(--font-color);
		border-radius: 16px;
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
			display: block;
		}

		#videoContainer {
			width: 66%;
			height: 100%;
			aspect-ratio: 4/3;
		}
	}
</style>
