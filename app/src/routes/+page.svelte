<script lang="ts">
	import type { DataConnection } from 'peerjs';
	import Peer from 'peerjs';
	import { arkitBlendshapeNames } from '../../../lib/blendshapes';
	import { customAlphabet } from 'nanoid';
	import { alphanumeric } from 'nanoid-dictionary';
	import { metadata } from '../../../lib/metadata';
	import logo from '$lib/images/logo.svg';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	type Data = {
		connection: boolean;
		blendshapes: { [key: string]: number };
		leftEyeRotation: { [key: string]: number };
		rightEyeRotation: { [key: string]: number };
		headRotation: { [key: string]: number };
		time: { [key: string]: number };
	};

	type Status = {
		text: string;
		loadingNeeded: boolean;
		loadingStatus: string;
	};

	let url: string;
	let status: Status[] = [];
	let conn: DataConnection | null = null;
	let blendshapeName: string[] = Array.from(arkitBlendshapeNames.keys());
	let blendshapesValue: number[] = [];
	let latency: number = 0;
	let packageCount: number = 0;
	let checkVersion: boolean = false;
	//const valueLength: number = 58; //52 blendshapes, 4 for rotation, 2 for time

	// function getTime() {
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

	function setStatus(input: Status) {
		let update = false;
		status.forEach((item) => {
			if (item.text === input.text) {
				item.loadingNeeded = input.loadingNeeded;
				item.loadingStatus = input.loadingStatus;
				update = true;
			}
		});
		if (!update) {
			status.push(input);
		}
		status = status;
	}

	function clearStatus() {
		status = [];
	}

	function connect() {
		//let processedURl = new URL(url);
		//let host = processedURl.host;
		//let id = processedURl.searchParams.get('id');
		//for current version, used simple url as id
		let id = url;
		packageCount = 0;
		clearStatus();
		if (id == null) {
			setStatus({
				text: 'No id provided',
				loadingNeeded: false,
				loadingStatus: '',
			});
			return;
		}
		//setStatus(`Connecting to server: ${host}\r\n`);
		//createPeer(host, id);
		setStatus({
			text: 'Connecting to server',
			loadingNeeded: true,
			loadingStatus: 'loading',
		});
		createPeer('', id);
	}
	function generateID(): string {
		const nanoid = customAlphabet(alphanumeric, 6);
		let id: string = nanoid();
		return 'p-' + id;
	}
	function createPeer(host: string, peerId: string) {
		//let peer = new Peer({ host: host, port: 9000, path: '/' });
		//use default server for prototyping
		let peer = new Peer(generateID());
		peer.on('open', function (id) {
			connectPeer(peer, peerId);
			setStatus({
				text: 'Connecting to server',
				loadingNeeded: true,
				loadingStatus: 'success',
			});
			setStatus({
				text: `My id : ${id}`,
				loadingNeeded: false,
				loadingStatus: '',
			});
		});
		peer.on('connection', function (conn) {});
	}

	function connectPeer(peer: Peer, id: string) {
		if (conn) {
			conn.close();
		}

		conn = peer.connect(id, {
			metadata: metadata,
			serialization: 'json',
		});
		// on open will be launch when you successfully connect to PeerServer
		conn.on('open', function () {
			// here you have conn.id
			setStatus({
				text: `Connected to peer id : ${id}.`,
				loadingNeeded: false,
				loadingStatus: '',
			});
			setStatus({
				text: `Checking version`,
				loadingNeeded: true,
				loadingStatus: 'loading',
			});

			if (window.electron) {
				window.electron.send('open-osc-server');
			}
		});

		conn.on('close', function () {
			if (!checkVersion) {
				setStatus({
					text: `Checking version`,
					loadingNeeded: true,
					loadingStatus: 'failed',
				});
				setStatus({
					text: `Your version ${metadata.version} is outdated. Please go to https://github.com/SpookyCorgi/phiz to download the latest version.`,
					loadingNeeded: false,
					loadingStatus: '',
				});
			}
			checkVersion = false;
		});

		conn.on('data', function (data: unknown) {
			if (data) {
				let decodedData = data as Data;

				if (decodedData.connection) {
					if (!checkVersion) {
						setStatus({
							text: `Checking version`,
							loadingNeeded: true,
							loadingStatus: 'success',
						});
						checkVersion = true;
					}
				}

				let blendshapes = Object.values(decodedData.blendshapes);
				let leftEye = Object.values(decodedData.leftEyeRotation);
				let rightEye = Object.values(decodedData.rightEyeRotation);
				let headRotation = Object.values(decodedData.headRotation);
				let [dataSecond, dataMillisecond] = Object.values(decodedData.time);

				//blendshapes
				if (blendshapes && blendshapes.length === 52) {
					if (window.electron) {
						window.electron.send('set-blendshapes', [blendshapeName, blendshapes]);
					}
					blendshapesValue = blendshapes;
				}

				//eye rotation
				if (leftEye && rightEye && leftEye.length === 4 && rightEye.length === 4) {
					if (window.electron) {
						window.electron.send('set-eye-rotation', [leftEye, rightEye]);
					}
				}

				//quaternion
				if (headRotation && headRotation.length === 4) {
					if (window.electron) {
						window.electron.send('set-quaternion', headRotation);
					}
				}

				//time
				if (dataSecond && dataMillisecond) {
					let date = new Date();
					latency =
						(date.getSeconds() - dataSecond) * 1000 +
						date.getMilliseconds() -
						dataMillisecond;
				}
			}
		});
	}
</script>

<main class="p-4">
	<div id="url-slot" class="flex gap-2">
		<img src={logo} alt="Logo" />
		<input type="text" bind:value={url} />
		<button type="button" class="btn variant-filled-primary btn-base" on:click={connect}>
			Connect
		</button>
	</div>

	<div class="card mt-4 p-2 h-36 overflow-hidden flex flex-col">
		<p class="font-bold">Status</p>
		<hr />
		<div class="h-full overflow-y-scroll">
			{#each status as s}
				<div class="flex gap-2 items-center">
					<p>{s.text}</p>
					{#if s.loadingNeeded}
						{#if s.loadingStatus === 'loading'}
							<div class="h-4 w-4"><ProgressRadial stroke={40} /></div>
						{:else if s.loadingStatus === 'success'}
							<p class="text-primary-500">&#x2713;</p>
						{:else if s.loadingStatus === 'failed'}
							<p class="text-error-500">&#x2715;</p>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<p class="mt-2">Latency: {latency} millisecond</p>
	<p>Package count: {packageCount}</p>
	<div class="mt-2 h-72 overflow-hidden card p-2 flex flex-col">
		<p class="font-bold">Blendshapes</p>
		<hr />
		<ul class="h-full overflow-y-scroll">
			{#each blendshapeName as blendshape, i}
				<li class="flex">
					<p class="w-48">{blendshape}:</p>
					<p id="{i}-shape">{blendshapesValue[i]?.toFixed(2)}</p>
				</li>
			{/each}
		</ul>
	</div>
</main>
