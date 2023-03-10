<script lang="ts">
	import { onMount } from 'svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import FileDropzone from '../../../../lib/ui/FileDropzone/FileDropzone.svelte';

	import type { FaceTrackerResult, Nullable } from '$lib/@0xalter/mocap4face/advanced';
	import { setupCamera } from '$lib/camera';
	import { startTracking } from '$lib/tracking';
	import { dataSmoother, type ShapeFrame } from '$lib/utils';
	import { arkitBlendshapeMap, arkitBlendshapeName } from '../../../../lib/blendshapes';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	//import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
	import * as SkeletonUtils from '$lib/SkeletonUtils.js';
	//html elements
	let canvas: HTMLCanvasElement;
	let urlValidation: string = '';
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	//binded values
	let deviceInfos: MediaDeviceInfo[] = [];
	let smoothBin: number = 0.1;
	let smoothFrames: number = 0;
	let blendshapesClamp: number[] = new Array(52).fill(1.0);
	let activeAnimation: string = 'idle';
	let bgColor: string = '#000000';
	let drawerState: string = 'hidden';
	let trackerLoading: boolean = true;
	let files: FileList;
	//three js components
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let clock: THREE.Clock;
	let cameraPosition = new THREE.Vector3(0, 1, 5);
	let control: OrbitControls;
	let model: THREE.Object3D;
	let mixers: Map<string, THREE.AnimationMixer> = new Map();
	let skeletonHelpers: Map<string, THREE.SkeletonHelper> = new Map();
	let boneContainers: Map<string, THREE.Object3D> = new Map();
	let animationRetargetOptions: Map<string, string> = new Map();
	let modelSkeletonHelper: THREE.SkeletonHelper;
	//data
	let storedData: ShapeFrame[] = [];
	let blendshapes: Map<string, number> = new Map();
	let rdmUrl: string = 'https://models.readyplayer.me/63fe80ed9dc8b8dcb3b4f133.glb';
	let head: THREE.SkinnedMesh;
	let leftEye: THREE.SkinnedMesh;
	let rightEye: THREE.SkinnedMesh;
	let teeth: THREE.SkinnedMesh;
	let headBone: THREE.Bone;
	let headBoneRotation: THREE.Quaternion;
	let animations: THREE.AnimationClip[] = [];

	function init() {
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

		loadRDM().then((success) => {
			if (success) {
				loadAnimation('./idle.fbx', 'idle').then((animation) => {
					animations.push(animation);
					animations = animations;
					activeAnimation = animation.name;
					applyAnimation(animation.name);
				});
			}
		});
	}

	function loadGLTF(url: string) {
		return new Promise((resolve) => {
			const loader = new GLTFLoader();
			loader.load(url, (gltf) => resolve(gltf));
		});
	}

	function loadRDM() {
		return new Promise<boolean>((resolve) => {
			if (
				rdmUrl == undefined ||
				rdmUrl == '' ||
				rdmUrl == null ||
				!rdmUrl.endsWith('.glb') ||
				!rdmUrl.startsWith('https://models.readyplayer.me/')
			) {
				urlValidation = 'input-error';
				return resolve(false);
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
			let url = rdmUrl + '?pose=T&&morphTargets=ARKit';

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
						case 'LeftShoulder':
						//obj.scale.y = 0.5;
					}
					//console.log(obj.name);
				});
				let bones: THREE.Bone[] = [];
				model.traverse((child) => {
					if (child.type === 'Bone' && child instanceof THREE.Bone) {
						bones.push(child);
					}
				});
				let skeleton = new THREE.Skeleton(bones);
				bones.forEach((bone) => {
					bone.updateMatrixWorld(true);
					//bone.updateMatrix();
					//bone.applyMatrix4(bone.matrix);

					//bone.position.set(0, 0, 0);
					//bone.rotation.set(0, 0, 0);
					//bone.scale.set(1, 1, 1);
					//bone.updateMatrix();
					let boneIndex = skeleton.bones.indexOf(bone);
					skeleton.boneInverses[boneIndex].copy(bone.matrixWorld).invert();
				});
				model.skeleton = skeleton;
				modelSkeletonHelper = new THREE.SkeletonHelper(skeleton.bones[0]);
				modelSkeletonHelper.skeleton = skeleton;
				console.log(skeleton);

				scene.add(model);
				scene.add(modelSkeletonHelper);

				resolve(true);
			});
		});
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
		for (let [arkitName, mocapName] of arkitBlendshapeMap) {
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
					head.morphTargetInfluences[head.morphTargetDictionary[name]] =
						value * blendshapesClamp[arkitBlendshapeName.indexOf(name)];
					teeth.morphTargetInfluences[teeth.morphTargetDictionary[name]] =
						value * blendshapesClamp[arkitBlendshapeName.indexOf(name)];
					leftEye.morphTargetInfluences[leftEye.morphTargetDictionary[name]] =
						value * blendshapesClamp[arkitBlendshapeName.indexOf(name)];
					rightEye.morphTargetInfluences[rightEye.morphTargetDictionary[name]] =
						value * blendshapesClamp[arkitBlendshapeName.indexOf(name)];
				}
			}
			// headBone.setRotationFromQuaternion(
			// 	new THREE.Quaternion().multiplyQuaternions(
			// 		headBoneRotation,
			// 		new THREE.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w)
			// 	)
			// );
		}
	}

	function getFPS() {}

	function loadAnimation(url: string, name: string) {
		return new Promise<THREE.AnimationClip>((resolve) => {
			const loader = new FBXLoader();
			loader.load(url, function (object) {
				object.scale.set(0.01, 0.01, 0.01);

				let animation = object.animations[0];
				animation.name = name.replace('.fbx', '');

				let bones: THREE.Bone[] = [];
				let option: any = {
					hip: '',
					names: {}
					//preservePosition: true
					//useTargetMatrix: true,
					//preserveHipPosition: true
					//preserveMatrix: true
				};
				let keyword: string;
				//identify skeleton type
				object.traverse((child) => {
					if (child.name.includes('Hips')) {
						option.hip = child.name;
						keyword = child.name.replace('Hips', '');
					}
				});
				//gather bones and names
				object.traverse((child) => {
					if (child.type === 'Bone' && child instanceof THREE.Bone) {
						bones.push(child);
						option.names[child.name.replace(keyword, '')] = child.name;
					}
				});
				let skeleton = new THREE.Skeleton(bones);
				const helper = new THREE.SkeletonHelper(skeleton.bones[0]);
				helper.skeleton = skeleton;
				object.skeleton = skeleton;
				skeletonHelpers.set(name, helper);

				scene.add(object);
				object.visible = false;
				scene.add(helper);

				//option.offsets = SkeletonUtils.getSkeletonOffsets(modelSkeletonHelper, helper, option);
				animationRetargetOptions.set(name, option);

				// skeletonHelpers.forEach((helper) => {
				// 	scene.remove(helper);
				// });
				// boneContainers.forEach((boneContainer) => {
				// 	scene.remove(boneContainer);
				// });

				const mixer = new THREE.AnimationMixer(helper);
				mixers.set(name, mixer);
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
			applyAnimation(animation.name);
		});
	}

	function applyAnimation(animationName: string) {
		if (model) {
			let sAnimation = animations.find((animation) => animation.name === activeAnimation);
			if (sAnimation) {
				const action = mixers.get(animationName)?.clipAction(sAnimation)?.play();
			}
		}
	}

	function animationChanged() {
		mixers.forEach((mixer) => mixer.stopAllAction());
		let sAnimation = animations.find((animation) => animation.name === activeAnimation);
		if (sAnimation) {
			const action = mixers.get(activeAnimation)?.clipAction(sAnimation)?.play();
		}
	}

	function updateBgColor() {
		renderer.setClearColor(bgColor, 1);
	}

	function drawerOpen() {
		if (drawerState === 'block') {
			drawerState = 'hidden';
		} else if (drawerState === 'hidden') {
			drawerState = 'block';
		}
	}

	function trackerLoaded() {
		trackerLoading = false;
	}

	function animate() {
		requestAnimationFrame(animate);

		let mixer = mixers.get(activeAnimation);
		if (mixer) {
			mixer.update(clock.getDelta());
			if (skeletonHelpers.get(activeAnimation) && animationRetargetOptions.get(activeAnimation)) {
				SkeletonUtils.retarget(
					modelSkeletonHelper,
					skeletonHelpers.get(activeAnimation),
					animationRetargetOptions.get(activeAnimation)
				);
			}
		}
		renderer.render(scene, camera);
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
			trackerLoading = true;
			startTracking(videoElement, onBlendshapeResult, getFPS, trackerLoaded);
		});

		//change source when select changes
		videoSelect.onchange = () => {
			setupCamera(videoElement, videoSelect).then((infos) => {
				if (infos.length == 0) {
					console.log('No camera available');
					return;
				}
				trackerLoading = true;
				startTracking(videoElement, onBlendshapeResult, getFPS, trackerLoaded);
			});
		};

		init();
		animate();
	});
</script>

<main class="relative w-full h-full">
	<video bind:this={videoElement} class="absolute" autoplay muted playsinline />
	<canvas bind:this={canvas} class="w-full h-full absolute" />

	<button
		on:click={drawerOpen}
		class="btn h-10 w-10 p-0 absolute right-2 top-2 z-30 variant-filled-primary"
	>
		{#if drawerState === 'hidden'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 20 20"
				class="svg-icon inline-block stroke-current stroke-2 w-5 h-5"
				data-testid="svg-icon"
			>
				<line x1="1" y1="4" x2="19" y2="4" />
				<line x1="1" y1="10" x2="19" y2="10" />
				<line x1="1" y1="16" x2="19" y2="16" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 20 20"
				class="svg-icon inline-block stroke-current stroke-2 w-5 h-5"
				data-testid="svg-icon"
			>
				<line x1="2" y1="4" x2="18" y2="16" />
				<line x1="2" y1="16" x2="18" y2="4" />
			</svg>
		{/if}
	</button>
	<div
		class="absolute {drawerState} right-0 gap-4 flex flex-col w-[480px] max-w-full overflow-y-scroll h-full p-2 bg-surface-50-900-token"
	>
		<h2>Settings</h2>
		<div class="card p-2">
			<p class="font-semibold">Ready Player Me URL</p>
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

		<div class="card p-2 ">
			<p class="font-semibold">Animations</p>
			<div class="gap-2 flex flex-col">
				<FileDropzone name="files" accept=".fbx" on:change={animationUpload} bind:files>
					<svelte:fragment slot="meta">FBX files from mixamo.com</svelte:fragment>
				</FileDropzone>
				<ListBox active="variant-filled-primary">
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
		<div class="card p-2">
			<p class="font-semibold">Background color picker</p>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input
					type="color"
					bind:value={bgColor}
					placeholder="Color picker"
					class="input w-10 h-10"
					on:change={updateBgColor}
				/>
				<input class="input" type="text" readonly tabindex="-1" placeholder={bgColor} />
			</div>
		</div>
		<div class="w-full card p-2">
			<label for="videoSource"><p class="font-semibold">Webcam source:&nbsp;</p></label>
			<select bind:this={videoSelect} class="select">
				{#each deviceInfos as device}
					<option value={device.deviceId} class="text-sm">{device.label}</option>
				{/each}
			</select>
		</div>

		<div class="w-full mb-2 card p-2">
			<p class="font-semibold">Blendshapes</p>
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

			<div id="result" class="p-4 card overflow-y-scroll hiddenflex flex-col">
				{#each [...blendshapes] as [key, value], i}
					<div class="flex gap-2 justify-end">
						<p>{key}:</p>
						<p class="w-8">{value.toFixed(2)}</p>
						<RangeSlider
							name="range-slider"
							bind:value={blendshapesClamp[arkitBlendshapeName.indexOf(key)]}
							min={0.5}
							max={2.0}
							step={0.05}
							class="w-16 sm:w-36"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>

	{#if trackerLoading}
		<div
			class="w-full h-full z-50  bg-surface-900/50 absolute flex flex-col items-center justify-center"
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
</main>
