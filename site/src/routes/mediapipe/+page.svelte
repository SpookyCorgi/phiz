<script lang="ts">
	import { onMount } from 'svelte';

	import { setupCamera } from '$lib/camera';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

	import UAParser from 'ua-parser-js';

	import { FaceMesh } from '@mediapipe/face_mesh/';

	//html elements
	let canvas: HTMLCanvasElement;
	let urlValidation: string = '';
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let videoContainer: HTMLDivElement;
	//binded values
	let deviceInfos: MediaDeviceInfo[] = [];
	let trackerLoading: boolean = true;
	//three js components
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let clock: THREE.Clock;
	let mixer: THREE.AnimationMixer;
	let cameraPosition = new THREE.Vector3(0, 1.7, 1);
	let model: THREE.Object3D;
	//data
	let blendshapes: Map<string, number> = new Map();
	let rdmUrl: string = 'https://models.readyplayer.me/63c70f6e85255ccb439d9e05.glb';
	let head: THREE.SkinnedMesh;
	let leftEye: THREE.SkinnedMesh;
	let rightEye: THREE.SkinnedMesh;
	let teeth: THREE.SkinnedMesh;
	let headBone: THREE.Bone;
	let headBoneRotation: THREE.Quaternion;

	let faceMesh: FaceMesh;
	let videoProcessed: boolean = true;
	let lastVideoTime = 0;
	let tfliteModel: any;
	let tf, tflite;
	let blendshapeValues: [string, number][] = [];
	let previousBlendshapeValues: [string, number][] = [];
	let blendshapesNames = [
		'_neutral',
		'browDownLeft',
		'browDownRight',
		'browInnerUp',
		'browOuterUpLeft',
		'browOuterUpRight',
		'cheekPuff',
		'cheekSquintLeft',
		'cheekSquintRight',
		'eyeBlinkLeft',
		'eyeBlinkRight',
		'eyeLookDownLeft',
		'eyeLookDownRight',
		'eyeLookInLeft',
		'eyeLookInRight',
		'eyeLookOutLeft',
		'eyeLookOutRight',
		'eyeLookUpLeft',
		'eyeLookUpRight',
		'eyeSquintLeft',
		'eyeSquintRight',
		'eyeWideLeft',
		'eyeWideRight',
		'jawForward',
		'jawLeft',
		'jawOpen',
		'jawRight',
		'mouthClose',
		'mouthDimpleLeft',
		'mouthDimpleRight',
		'mouthFrownLeft',
		'mouthFrownRight',
		'mouthFunnel',
		'mouthLeft',
		'mouthLowerDownLeft',
		'mouthLowerDownRight',
		'mouthPressLeft',
		'mouthPressRight',
		'mouthPucker',
		'mouthRight',
		'mouthRollLower',
		'mouthRollUpper',
		'mouthShrugLower',
		'mouthShrugUpper',
		'mouthSmileLeft',
		'mouthSmileRight',
		'mouthStretchLeft',
		'mouthStretchRight',
		'mouthUpperUpLeft',
		'mouthUpperUpRight',
		'noseSneerLeft',
		'noseSneerRight'
	];

	const landmark_selected: number[] = [
		0, 1, 4, 5, 6, 7, 8, 10, 13, 14, 17, 21, 33, 37, 39, 40, 46, 52, 53, 54, 55, 58, 61, 63, 65, 66,
		67, 70, 78, 80, 81, 82, 84, 87, 88, 91, 93, 95, 103, 105, 107, 109, 127, 132, 133, 136, 144,
		145, 146, 148, 149, 150, 152, 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 168, 172, 173,
		176, 178, 181, 185, 191, 195, 197, 234, 246, 249, 251, 263, 267, 269, 270, 276, 282, 283, 284,
		285, 288, 291, 293, 295, 296, 297, 300, 308, 310, 311, 312, 314, 317, 318, 321, 323, 324, 332,
		334, 336, 338, 356, 361, 362, 365, 373, 374, 375, 377, 378, 379, 380, 381, 382, 384, 385, 386,
		387, 388, 389, 390, 397, 398, 400, 402, 405, 409, 415, 454, 466, 468, 469, 470, 471, 472, 473,
		474, 475, 476, 477
	];

	let landmarkSpheres: THREE.Object3D[] = [];
	function init() {
		blendshapesNames.forEach((name, index) => {
			blendshapeValues[index] = [name, 0];
			previousBlendshapeValues[index] = [name, 0];
		});
		//three js essentials
		clock = new THREE.Clock();
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(25, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
		camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

		//set up renderer
		renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true
		});
		renderer.setClearColor(0x000000, 1);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

		//add lights
		const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
		directionalLight.position.set(1, 1, 1);
		const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		scene.add(directionalLight, ambientLight);

		window.onresize = function () {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
		};
		camera.lookAt(0, 1.7, 0);
		for (let i = 0; i < 146; i++) {
			let sphere = new THREE.Mesh(
				new THREE.SphereGeometry(0.1, 32, 32),
				new THREE.MeshBasicMaterial({ color: 0xff0000 })
			);
			landmarkSpheres.push(sphere);
		}
		//scene.add(...landmarkSpheres);
		//load default character
		loadRDM();
	}

	function loadGLTF(url: string) {
		return new Promise((resolve) => {
			const loader = new GLTFLoader();
			loader.load(url, (gltf) => resolve(gltf));
		});
	}

	function loadRDM() {
		if (
			rdmUrl == undefined ||
			rdmUrl == '' ||
			rdmUrl == null ||
			!rdmUrl.endsWith('.glb') ||
			!rdmUrl.startsWith('https://models.readyplayer.me/')
		) {
			urlValidation = 'input-error';
			return;
		}
		//dispose previous
		if (model) {
			model.traverse(function (obj) {
				if (obj instanceof THREE.Mesh) {
					obj.geometry.dispose();
					obj.material.dispose();
				}
			});
			scene.remove(model);
		}

		urlValidation = 'input-success';
		let url = rdmUrl + '?pose=A&&morphTargets=ARKit';

		loadGLTF(url).then((gltf: any) => {
			model = gltf.scene.children[0];
			//make mesh global for mocap
			model.traverse(function (obj: any) {
				switch (obj.name) {
					case 'Wolf3D_Head':
						head = obj;
						break;
					case 'Head':
						headBone = obj;
						headBoneRotation = obj.quaternion.clone();
						break;
					case 'EyeLeft':
						leftEye = obj;
						break;
					case 'EyeRight':
						rightEye = obj;
						break;
					case 'Wolf3D_Teeth':
						teeth = obj;
						break;
				}
			});

			// const helper = new THREE.SkeletonHelper(model);
			// scene.add(helper);

			scene.add(model);
		});
	}

	function animate() {
		requestAnimationFrame(animate);

		if (mixer) {
			mixer.update(clock.getDelta());
		}
		if (
			videoElement &&
			!videoElement.paused &&
			videoElement.currentTime !== lastVideoTime &&
			videoProcessed &&
			faceMesh
		) {
			videoProcessed = false;
			sendVideo().then(() => {
				videoProcessed = true;
			});
		}
		renderer.render(scene, camera);
	}

	async function sendVideo() {
		//send will return after associate onresult is returned
		await faceMesh.send({ image: videoElement });
	}

	function setupMediaPipe() {
		faceMesh = new FaceMesh({
			locateFile: (file) => {
				return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
			}
		});
		faceMesh.setOptions({
			maxNumFaces: 1,
			refineLandmarks: true,
			minDetectionConfidence: 0.5,
			minTrackingConfidence: 0.5
		});
		faceMesh.onResults(onResults);
	}

	function onResults(results: any) {
		if (results.multiFaceLandmarks) {
			for (const landmarks of results.multiFaceLandmarks) {
				let processedLandmarks: [number, number][] = [];
				landmark_selected.forEach((num, index) => {
					const l = landmarks[num];
					processedLandmarks.push([l.x * 640, l.y * 480]);
					landmarkSpheres[index].position.set((l.x * 640) / 100, (l.y * 480) / 100, 0);
				});
				let input = tf.tensor([processedLandmarks]);
				let outputTensor = tfliteModel.predict(input) as tf.Tensor;
				previousBlendshapeValues = blendshapeValues;
				outputTensor.dataSync().forEach((d, i) => {
					blendshapeValues[i][1] = Math.min(1.0, Math.round(d * 100) / 100);
				});
				console.log(previousBlendshapeValues, blendshapeValues);
				if (model) {
					let eyeLeft = model.children[1];
					let eyeRight = model.children[2];
					let head = model.children[3];
					let teeth = model.children[4];
					blendshapesNames.forEach((name, index) => {
						let i = head.morphTargetDictionary[name];
						if (i != undefined) {
							eyeLeft.morphTargetInfluences[i] =
								(blendshapeValues[index][1] + previousBlendshapeValues[index][1]) / 2;
							eyeRight.morphTargetInfluences[i] =
								(blendshapeValues[index][1] + previousBlendshapeValues[index][1]) / 2;
							head.morphTargetInfluences[i] =
								(blendshapeValues[index][1] + previousBlendshapeValues[index][1]) / 2;
							teeth.morphTargetInfluences[i] =
								(blendshapeValues[index][1] + previousBlendshapeValues[index][1]) / 2;
						}
					});
				}
			}
		}
	}

	onMount(async () => {
		//detect device!
		const uaParser = new UAParser();
		let detectedBrowser = uaParser.getBrowser();

		//set video container aspect ratio cuz safari is stupid
		if (detectedBrowser.name == 'Mobile Safari') {
			videoContainer.style.height = `${videoContainer.clientWidth}px`;
			window.addEventListener('resize', () => {
				videoContainer.style.height = `${videoContainer.clientWidth}px`;
			});
		}

		//setup webcam with video source constraints
		// setupCamera(videoElement, videoSelect).then((infos) => {
		// 	if (infos.length == 0) {
		// 		console.log('No camera available');
		// 		return;
		// 	}
		// 	//get device list here because ios safari sucks and only show info after get user media
		// 	deviceInfos = infos;
		// 	trackerLoading = true;
		// });

		//change source when select changes
		// videoSelect.onchange = () => {
		// 	setupCamera(videoElement, videoSelect).then((infos) => {
		// 		if (infos.length == 0) {
		// 			console.log('No camera available');
		// 			return;
		// 		}
		// 		trackerLoading = true;
		// 	});
		// };

		init();
		animate();

		// Adds the CPU backend.
		await import('@tensorflow/tfjs-backend-cpu');
		tf = await import('@tensorflow/tfjs-core');
		tflite = await import('@tensorflow/tfjs-tflite');
		tfliteModel = await tflite.loadTFLiteModel(
			'https://storage.googleapis.com/mediapipe-assets/face_blendshapes.tflite'
		);

		setupMediaPipe();
	});
</script>

<main class="relative w-full h-full flex flex-col items-center overflow-y-scroll gap-2">
	<div class="w-full card p-2 max-w-[840px]">
		<label for="videoSource"><p class="font-semibold">Webcam source:&nbsp;</p></label>
		<select bind:this={videoSelect} class="select">
			{#each deviceInfos as device}
				<option value={device.deviceId} class="text-sm">{device.label}</option>
			{/each}
		</select>
	</div>
	<div class="flex">
		<div class="card w-full max-h-[720px] flex flex-col">
			<div class="flex w-full p-2 items-center">
				<label for="videoSource"><p>Source:&nbsp;</p></label>
				<select bind:this={videoSelect} class="w-[240px] select">
					{#each deviceInfos as device}
						<option value={device.deviceId} class="text-sm">{device.label}</option>
					{/each}
				</select>
			</div>
			<div class="flex">
				<div
					bind:this={videoContainer}
					class="relative rounded-container-token aspect-square w-full overflow-hidden flex items-center justify-center p-2"
				>
					<video
						autoplay
						playsinline
						muted
						bind:this={videoElement}
						class="z-0 object-cover"
						src="justdoit.mov"
						width="640px"
						height="640px"
						loop
					>
						<!-- <track kind="captions" /> -->
					</video>
				</div>
				<div class="card w-full max-w-[640px] h-[640px] flex flex-col m-2">
					<canvas bind:this={canvas} width="640px" height="640px" />
				</div>
			</div>
		</div>
		<!-- <div class="w-[200px] h-[720px] overflow-y-scroll">
			{#each blendshapeValues as value}
				<div class="flex justify-end">
					<p>{value[0]}:</p>
					<p>{value[1]}</p>
				</div>
			{/each}
		</div> -->
	</div>
</main>
