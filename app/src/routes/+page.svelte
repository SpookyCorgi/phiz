<script lang="ts">
	import type { DataConnection } from 'peerjs';
	import Peer from 'peerjs';
	import { arkitBlendshapeMap } from '../../../lib/blendshapes';
	import { customAlphabet } from 'nanoid';
	import { nolookalikes } from 'nanoid-dictionary';
	import { metadata } from '../../../lib/metadata';
	import logo from '$lib/assets/logo.svg';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	type Data = {
		connection: boolean;
		version: string;
		blendshapes: { [key: string]: number };
		leftEyeRotation: { [key: string]: number };
		rightEyeRotation: { [key: string]: number };
		headRotation: { [key: string]: number };
		time: { [key: string]: number };
		packageCount: number;
	};

	type styledText = {
		text: string;
		color?: string;
	};

	type loadingIcon = {
		state: string;
	};

	type Status = {
		id?: string;
		text: styledText[];
		loading?: loadingIcon;
	};

	let url: string;
	let port: number = 41235;
	let portValidation: string = '';
	let status: Status[] = [];
	let conn: DataConnection | null = null;
	let blendshapeName: string[] = Array.from(arkitBlendshapeMap.keys());
	let blendshapesValue: number[] = [];
	let latency: number = 0;
	let packageCount: number = 0;
	let packageSuccessRate: number = 0;
	let checkVersion: boolean = false;

	function setStatus(input: Status) {
		let update = false;
		if (input.id) {
			status.forEach((item) => {
				if (item.id && item.id === input.id) {
					item.text = input.text;
					item.loading = input.loading;
					update = true;
				}
			});
		}
		if (!update) {
			status.push(input);
		}
		status = status;
	}

	function clearStatus() {
		status = [];
	}
	function changePort() {
		if (port > 0 && port < 65536) {
			portValidation = '';
			if (window.electron) {
				window.electron.send('change-port', port);
			}
		} else {
			portValidation = 'input-error';
		}
	}
	function connect() {
		//let processedURl = new URL(url);
		//let host = processedURl.host;
		//let id = processedURl.searchParams.get('id');
		//for current version, used simple url as id
		let id = url;
		packageCount = 0;
		clearStatus();
		if (id == null || !id.startsWith('p-') || id.length !== 8) {
			setStatus({
				text: [{ text: 'Illegal id provided', color: 'error' }],
			});
			return;
		}
		//setStatus(`Connecting to server: ${host}\r\n`);
		//createPeer(host, id);
		setStatus({
			id: 'connect-to-server',
			text: [{ text: 'Connecting to server', color: '' }],
			loading: { state: 'loading' },
		});
		createPeer('', id);
	}
	function generateID(): string {
		const nanoid = customAlphabet(nolookalikes, 6);
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
				id: 'connect-to-server',
				text: [{ text: 'Connecting to server', color: '' }],
				loading: { state: 'success' },
			});
			setStatus({
				text: [
					{ text: 'My id :', color: '' },
					{ text: id, color: 'primary' },
				],
			});
		});
		peer.on('connection', function (conn) {});
		peer.on('error', function (err) {
			//peerjs eventemitter error type doesn't have type property
			let error = err as any;
			if (error.type === 'peer-unavailable') {
				setStatus({
					text: [{ text: `ID doesn't exist.`, color: 'error' }],
				});
			} else {
				setStatus({
					text: [{ text: 'Server connection error', color: 'error' }],
				});
			}
			console.log(err);
		});
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
				text: [
					{ text: 'Connected to peer id : ', color: '' },
					{ text: id, color: 'primary' },
				],
			});
			setStatus({
				id: 'check-version',
				text: [{ text: 'Checking version', color: '' }],
				loading: { state: 'loading' },
			});
			checkVersion = false;

			if (window.electron) {
				window.electron.send('open-osc-server');
			}
		});

		conn.on('close', function () {});

		conn.on('data', function (data: unknown) {
			if (data) {
				let decodedData = data as Data;

				if (!checkVersion) {
					if (decodedData.version !== metadata.version) {
						setStatus({
							id: 'check-version',
							text: [{ text: 'Checking version', color: '' }],
							loading: { state: 'error' },
						});
						setStatus({
							text: [
								{ text: 'Your version ', color: '' },
								{ text: metadata.version, color: 'primary' },
								{ text: ' is outdated. Please go to ', color: '' },
								{
									text: 'https://github.com/SpookyCorgi/phiz',
									color: 'primary',
								},
								{ text: ' to download the latest version.', color: '' },
							],
						});
					} else {
						setStatus({
							id: 'check-version',
							text: [{ text: 'Checking version', color: '' }],
							loading: { state: 'success' },
						});
					}
					checkVersion = true;
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

				//packageCount
				packageCount++;
				packageSuccessRate = (packageCount / decodedData.packageCount) * 100;
			}
		});

		conn.on('error', function (err) {
			setStatus({
				text: [{ text: 'Peer connection error', color: 'error' }],
			});
			console.log(err);
		});
	}
</script>

<main class="p-4 h-full w-full flex justify-center">
	<div class="flex flex-col h-full w-full max-w-2xl">
		<div id="url-slot" class="flex gap-2">
			<img src={logo} alt="Logo" />
			<input type="text" class="input" bind:value={url} placeholder="Paste ID from website" />
			<button type="button" class="btn variant-filled-primary btn-base" on:click={connect}>
				Connect
			</button>
		</div>

		<div class="card mt-4 p-2 h-36 min-h-36 overflow-hidden flex flex-col flex-none">
			<p class="font-bold">Status</p>
			<hr />
			<div class="h-full overflow-y-scroll">
				{#each status as s}
					<div class="flex gap-2 items-center">
						<div class="flex flex-wrap">
							{#each s.text as text}
								{#if text.color}
									<p class={`text-${text.color}-500`}>{text.text}&nbsp;</p>
								{:else}
									<p>{text.text}&nbsp;</p>
								{/if}
							{/each}
						</div>
						{#if s.loading}
							{#if s.loading.state === 'loading'}
								<div class="h-4 w-4">
									<ProgressRadial stroke={40} class="h-4 w-4" />
								</div>
							{:else if s.loading.state === 'success'}
								<p class="text-primary-500">&#x2713;</p>
							{:else if s.loading.state === 'failed'}
								<p class="text-error-500">&#x2715;</p>
							{/if}
						{/if}
					</div>
				{/each}
			</div>
		</div>
		<p class="mt-2">Latency: {latency} millisecond</p>
		<p>Package received: {packageSuccessRate.toFixed(2)}%</p>

		<div class="mt-2 min-h-72 overflow-hidden card p-2 flex flex-col grow">
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
		<div class="flex gap-2 items-center mt-4 mb-4">
			<p class="whitespace-nowrap">OSC port number:</p>
			<input type="number" bind:value={port} class="{portValidation}input" />
			<button type="button" class="btn variant-filled-primary btn-base" on:click={changePort}>
				Set
			</button>
		</div>
		<hr />
		<div class="flex justify-end">
			<span class="text-on-surface-token opacity-50">version: {metadata.version}</span>
		</div>
	</div>
</main>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
