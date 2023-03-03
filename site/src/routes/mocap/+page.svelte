<script lang="ts">
	import type { FaceTrackerResult, Nullable } from '$lib/@0xalter/mocap4face/advanced';

	import { onMount } from 'svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import FileDropzone from '../../../../lib/ui/FileDropzone/FileDropzone.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	import { setupCamera, getDeviceInfos } from '$lib/camera';
	import { arkitBlendshapeNames } from '../../../../lib/blendshapes';
	import { startTracking } from '$lib/tracking';
	import { dataSmoother, type ShapeFrame } from '$lib/utils';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import type { File } from '@0xalter/mocap4face';

	let canvas: HTMLCanvasElement;
	let urlValidation: string = '';
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	let deviceInfos: MediaDeviceInfo[] = [];
	let smoothBin: number = 0.1;
	let smoothFrames: number = 0;

	let blendshapes: Map<string, number> = new Map();
	let storedData: ShapeFrame[] = [];
	let activeAnimation: string = 'idle';

	//three js components
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let clock: THREE.Clock;
	let mixer: THREE.AnimationMixer;
	let clips: THREE.AnimationClip[];
	let cameraPosition = new THREE.Vector3(0, 1, 5);
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

	let animations: THREE.AnimationClip[] = [];
	let files: FileList;

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
		control.target.set(0, 1, 0);
		control.update();

		window.onresize = function () {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
		};

		//load default animation
		loadAnimation('./idle.fbx', 'idle').then((animation: THREE.AnimationClip) => {
			animations.push(animation);
			animations = animations;
			//load default character
			loadRDM();
		});
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

			console.log(model);
			scene.add(model);

			if (mixer) {
				mixer.stopAllAction();
			}
			mixer = new THREE.AnimationMixer(model);
			applyAnimation();
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

	function loadAnimation(url: string, name: string) {
		return new Promise<THREE.AnimationClip>((resolve) => {
			const loader = new FBXLoader();
			loader.load(url, function (object) {
				let animation = object.animations[0];
				animation.tracks.forEach((track) => {
					track.name = track.name.replace('mixamorig', '');
					if (track.name === 'Hips.position') {
						track.values = track.values.map((value) => value * 0.01);
					}
				});
				animation.name = name.replace('.fbx', '');
				resolve(animation);
			});
		});
	}

	function animationUpload(e: Event) {
		let url = URL.createObjectURL(files[0]);
		loadAnimation(url, files[0].name).then((animation) => {
			animations.push(animation);
			animations = animations;
			activeAnimation = animation.name;
			applyAnimation();
		});
	}

	function applyAnimation() {
		if (model) {
			model.animations = animations;
			if (mixer) {
				mixer.stopAllAction();
			}
			const action = mixer.clipAction(model.animations[model.animations.length - 1]);
			action.play();
		}
	}

	function animationChanged() {
		console.log(activeAnimation);
		if (mixer) {
			mixer.stopAllAction();
		}
		let sAnimation = animations.find((animation) => animation.name === activeAnimation);
		if (sAnimation) {
			const action = mixer.clipAction(sAnimation);
			action.play();
		}
	}

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

	<div class="absolute right-2 top-2 gap-2 flex flex-col max-w-[640px] lg:max-w-[896px]">
		<div>
			<p>Ready Player Me URL</p>
			<div class="flex w-full gap-2">
				<input
					type="text"
					bind:value={rdmUrl}
					placeholder="Ready player me link"
					class="input w-full {urlValidation}"
				/>
				<button on:click={loadRDM} class="btn variant-filled-primary btn-base">Load</button>
			</div>
		</div>

		<div>
			<p>Animations</p>
			<div class="card p-2 gap-2 flex flex-col">
				<FileDropzone name="files" accept=".fbx" on:change={animationUpload} bind:files>
					<svelte:fragment slot="meta">FBX files from mixamo.com</svelte:fragment>
				</FileDropzone>
				<ListBox>
					{#each animations as animation}
						<ListBoxItem
							on:change={animationChanged}
							bind:group={activeAnimation}
							name="animation"
							value={animation.name}>{animation.name}</ListBoxItem
						>
					{/each}
				</ListBox>
			</div>
		</div>

		<div class="w-full">
			<label for="videoSource"><p>Webcam source:&nbsp;</p></label>
			<select bind:this={videoSelect} class="select">
				{#each deviceInfos as device}
					<option value={device.deviceId} class="text-sm">{device.label}</option>
				{/each}
			</select>
		</div>

		<div class="w-full mb-2 card p-2">
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

			<div id="result" class="p-4 card overflow-y-scroll max-h-[640px] hiddenflex flex-col">
				{#each [...blendshapes] as [key, value]}
					<div class="flex gap-2 justify-end">
						<p>{key}:</p>
						<p class="w-8">{value.toFixed(2)}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
