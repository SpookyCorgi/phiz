<script lang="ts">
	import type { TrackingResult } from '$lib/tracking';

	import { onMount } from 'svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { ProgressRadial, FileDropzone } from '@skeletonlabs/skeleton';

	import { setupCamera } from '$lib/camera';
	import { dataSmoother, type ShapeFrame } from '$lib/utils';
	import { arkitBlendshapeMap, arkitBlendshapeName } from '../../../../lib/blendshapes';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	//html elements
	let canvas: HTMLCanvasElement;
	let urlValidation: string = '';
	let videoElement: HTMLVideoElement;
	let videoSelect: HTMLSelectElement;
	//binded values
	let deviceInfos: MediaDeviceInfo[] = [];
	let smoothBin: number = 0.05;
	let smoothFrames: number = 0;
	let blendshapesMulti: number[] = new Array(52).fill(1.0);
	let activeAnimation: string = 'idle';
	let bgColor: string = '#000000';
	let ambientLightColor: string = '#ffffff';
	let ambientLightIntensity: number = 0.5;
	let drawerState: string = 'hidden';
	let trackerLoading: boolean = true;
	let files: FileList;
	//three js components
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let clock: THREE.Clock;
	let mixer: THREE.AnimationMixer;
	let cameraPosition = new THREE.Vector3(0, 1, 5);
	let control: OrbitControls;
	let model: THREE.Object3D;
	let ambientLight: THREE.AmbientLight;
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

	let enableMediapipe: boolean = false;

	let setMediapipeState: Function | null = null;
	function mediapipeStateChanged() {
		if (setMediapipeState) {
			setMediapipeState(enableMediapipe);
		}
	}

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
		ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity);
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
				//prevent obj disappear at zoom
				obj.frustumCulled = false;
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

			if (mixer) {
				mixer.stopAllAction();
			}
			mixer = new THREE.AnimationMixer(model);
			applyAnimation();
		});
	}

	function onBlendshapeResult(result: TrackingResult) {
		if (result == null) {
			return;
		}

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
						value = value * 0.35 + result.mediaPipeData.get(arkitName)! * 0.65;
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
						value * blendshapesMulti[arkitBlendshapeName.indexOf(name)];
					teeth.morphTargetInfluences[teeth.morphTargetDictionary[name]] =
						value * blendshapesMulti[arkitBlendshapeName.indexOf(name)];
					leftEye.morphTargetInfluences[leftEye.morphTargetDictionary[name]] =
						value * blendshapesMulti[arkitBlendshapeName.indexOf(name)];
					rightEye.morphTargetInfluences[rightEye.morphTargetDictionary[name]] =
						value * blendshapesMulti[arkitBlendshapeName.indexOf(name)];
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
				let animation = object.animations[0];

				//get animation track prefix
				let prefix = '';
				animation.tracks.forEach((track) => {
					if (track.name.includes('Hips')) {
						prefix = track.name.split('Hips')[0];
					}
				});

				animation.tracks.forEach((track) => {
					track.name = track.name.replace(prefix, '');

					if (track.name.includes('position')) {
						track.values = track.values.map((value) => value * 0.01);
					}

					// if (track.name.includes('quaternion')) {
					// 	//track.values = track.values.map((d) => 0);
					// }
				});
				//animation.tracks = animation.tracks.filter((d) => !d.name.includes('position'));
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
		if (mixer) {
			mixer.stopAllAction();
		}
		let sAnimation = animations.find((animation) => animation.name === activeAnimation);
		if (sAnimation) {
			const action = mixer.clipAction(sAnimation);
			action.play();
		}
	}

	function updateBgColor() {
		renderer.setClearColor(bgColor, 1);
	}

	function updateAmbientColor() {
		ambientLight.color = new THREE.Color(ambientLightColor);
	}

	function updateAmbientIntensity() {
		ambientLight.intensity = ambientLightIntensity;
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

		if (mixer) {
			mixer.update(clock.getDelta());
		}
		renderer.render(scene, camera);
	}

	onMount(async () => {
		//tfjslite and mediapipe has side effects, so we need to import it dynamically
		const { startTracking, mediapipeState } = await import('$lib/tracking');

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

		<div class="card p-2">
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
		<div class="card p-2">
			<p class="font-semibold">Ambient light</p>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input
					type="color"
					bind:value={ambientLightColor}
					placeholder="Color picker"
					class="input w-10 h-10"
					on:change={updateAmbientColor}
				/>
				<input class="input" type="text" readonly tabindex="-1" placeholder={ambientLightColor} />
				<div class="flex gap-2 justify-end">
					<p>Intensity:</p>
					<RangeSlider
						name="range-slider"
						bind:value={ambientLightIntensity}
						min={0.1}
						max={3.0}
						step={0.1}
						class=""
						on:change={updateAmbientIntensity}
					/>
					<p class="w-8 text-secondary-500">{ambientLightIntensity.toFixed(2)}</p>
				</div>
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

			<div id="result" class="p-4 card overflow-y-scroll hiddenflex flex-col">
				{#each [...blendshapes] as [key, value], i}
					<div class="flex gap-2 justify-end">
						<p>{key}:</p>
						<RangeSlider
							name="range-slider"
							bind:value={blendshapesMulti[arkitBlendshapeName.indexOf(key)]}
							min={0.5}
							max={2.0}
							step={0.05}
							class="w-16 sm:w-36"
						/>
						<p class="w-8 text-secondary-500">
							{(value * blendshapesMulti[arkitBlendshapeName.indexOf(key)]).toFixed(2)}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	{#if trackerLoading}
		<div
			class="w-full h-full z-50 bg-surface-900/50 absolute flex flex-col items-center justify-center"
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
