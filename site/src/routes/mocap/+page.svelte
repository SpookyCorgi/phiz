<script lang="ts">
	import type { FaceTrackerResult, Nullable } from '$lib/@0xalter/mocap4face/advanced';

	import { onMount } from 'svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	import { setupCamera, getDeviceInfos } from '$lib/camera';
	import { arkitBlendshapeNames } from '../../../../lib/blendshapes';
	import { startTracking } from '$lib/tracking';
	import { dataSmoother, type ShapeFrame } from '$lib/utils';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

	let canvas: HTMLCanvasElement;
	let urlValidation: string = '';
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let smoothBin: number = 0.1;
	let smoothFrames: number = 0;

	let blendshapes: Map<string, number> = new Map();
	let storedData: ShapeFrame[] = [];

	//three js components
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let clock: THREE.Clock;
	let mixer: THREE.AnimationMixer;
	let clips: THREE.AnimationClip[];
	let cameraPosition = new THREE.Vector3(0, 0, 1);
	let control: OrbitControls;
	let model: THREE.Object3D;
	let rdmUrl: string = 'https://models.readyplayer.me/63fe80ed9dc8b8dcb3b4f133.glb';
	let modelExist: boolean = false;
	let head: THREE.SkinnedMesh;
	let leftEye: THREE.SkinnedMesh;
	let rightEye: THREE.SkinnedMesh;
	let teeth: THREE.SkinnedMesh;
	let headBone: THREE.Bone;
	let headBoneRotation: THREE.Quaternion;

	function init() {
		//clock
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
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
		directionalLight.position.set(1, 1, 1);
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(directionalLight, ambientLight);

		//add controls
		control = new OrbitControls(camera, canvas);

		window.onresize = function () {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
		};

		loadRDM();
	}

	function loadGLTF(url: string) {
		return new Promise((resolve) => {
			const loader = new GLTFLoader();
			loader.load(url, (gltf) => resolve(gltf));
		});
	}

	function loadRDM() {
		if (rdmUrl == undefined || rdmUrl == '' || rdmUrl == null || !rdmUrl.endsWith('.glb')) {
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

		rdmUrl += '?pose=T&&morphTargets=ARKit';
		loadGLTF(rdmUrl).then((gltf: any) => {
			model = gltf.scene;
			model.position.set(0, -1.7, 0);
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
			console.log(model);
			scene.add(model);
			modelExist = true;
		});
	}

	function animate() {
		requestAnimationFrame(animate);

		if (mixer) {
			mixer.update(clock.getDelta());
		}
		renderer.render(scene, camera);
	}

	function onBlendshapeResult(result: Nullable<FaceTrackerResult>) {
		if (result == null) {
			return;
		}

		//get blendshape values
		let values = new Map<string, number>();
		for (const [name, value] of result.blendshapes) {
			//clamp value to 0.0~1.0
			values.set(name, Math.max(0, Math.min(1, value)));
		}
		//apply smoothing
		let smoothedResult;
		[smoothedResult, smoothFrames] = dataSmoother(
			{ shapes: values, time: Date.now() },
			storedData,
			smoothBin
		);
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

		//get head rotation in quaternion
		let rotation = result.rotationQuaternion.xyzw;
		let dataHead = new Float32Array([rotation.x, rotation.y, rotation.z, rotation.w]);

		//get time
		let date = new Date();
		let dataTime = new Uint16Array([date.getSeconds(), date.getMilliseconds()]);

		if (model && head && teeth && leftEye && rightEye && headBone) {
			for (let [name, value] of blendshapes) {
				if (
					head.morphTargetDictionary &&
					head.morphTargetInfluences &&
					head.morphTargetDictionary[name] != undefined &&
					teeth.morphTargetDictionary &&
					teeth.morphTargetInfluences &&
					teeth.morphTargetDictionary[name] != undefined &&
					leftEye.morphTargetDictionary &&
					leftEye.morphTargetInfluences &&
					leftEye.morphTargetDictionary[name] != undefined &&
					rightEye.morphTargetDictionary &&
					rightEye.morphTargetInfluences &&
					rightEye.morphTargetDictionary[name] != undefined
				) {
					head.morphTargetInfluences[head.morphTargetDictionary[name]] = value;
					teeth.morphTargetInfluences[teeth.morphTargetDictionary[name]] = value;
					leftEye.morphTargetInfluences[leftEye.morphTargetDictionary[name]] = value;
					rightEye.morphTargetInfluences[rightEye.morphTargetDictionary[name]] = value;
				}
			}
			headBone.setRotationFromQuaternion(
				new THREE.Quaternion().multiplyQuaternions(
					headBoneRotation,
					new THREE.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w)
				)
			);
		}
	}
	function getFPS() {}

	onMount(() => {
		//setup webcam with video source constraints
		setupCamera(videoElement, videoSelect).then((infos) => {
			if (infos.length == 0) {
				console.log('No camera available');
				return;
			}
			//get device list here because ios safari sucks and only show info after get user media
			deviceInfos = infos;
			startTracking(videoElement, onBlendshapeResult, getFPS);
		});

		//change source when select changes
		videoSelect.onchange = () => {
			setupCamera(videoElement, videoSelect).then((infos) => {
				if (infos.length == 0) {
					console.log('No camera available');
					return;
				}
				startTracking(videoElement, onBlendshapeResult, getFPS);
			});
		};

		init();
		animate();
	});
</script>

<main class="relative w-full h-[calc(100vh_-_80px)] overflow-x-hidden overflow-y-hidden">
	<video bind:this={videoElement} class="absolute" autoplay muted playsinline />
	<canvas bind:this={canvas} class="w-full h-full absolute" />

	<div class="absolute right-2 top-2">
		<div class="flex w-[400px] max-w-full gap-2">
			<input
				type="text"
				bind:value={rdmUrl}
				placeholder="Ready player me link"
				class={urlValidation}
			/>
			<button on:click={loadRDM} class="btn variant-filled-primary btn-base">Load</button>
		</div>
		<div class="flex w-full p-2 items-center">
			<label for="videoSource"><p>Source:&nbsp;</p></label>
			<select bind:this={videoSelect} class="w-[240px]">
				{#each deviceInfos as device}
					<option value={device.deviceId} class="text-sm">{device.label}</option>
				{/each}
			</select>
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
	</div>
</main>
