<script lang="ts">
	import type { DataConnection } from 'peerjs';
	import Peer from 'peerjs';
	import { arkitBlendshapeMap } from '../../../../lib/blendshapes';
	import { customAlphabet } from 'nanoid';
	import { nolookalikes } from 'nanoid-dictionary';
	import { metadata } from '../../../../lib/metadata';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { setStatus, clearStatus, type Status } from './status';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Websocket from '$lib/websocket/websocket.svelte';

	type Data = {
		connection: boolean;
		blendshapes: { [key: string]: number };
		leftEyeRotation: { [key: string]: number };
		rightEyeRotation: { [key: string]: number };
		headRotation: { [key: string]: number };
		time: { [key: string]: number };
		packageCount: number;
	};

	let peerId: string;
	let conn: DataConnection | null = null;
	let packageCount: number = 0;
	let checkVersion: boolean = false;

	let latency: number = 0;
	let packageSuccessRate: number = 0;
	let status: Status = { message: [] };
	let blendshapeName: string[] = Array.from(arkitBlendshapeMap.keys());
	let blendshapesValue: number[] = [];

	let websocket: any;
	let websocketOpen: boolean;

	function generateID(): string {
		const nanoid = customAlphabet(nolookalikes, 6);
		let id: string = nanoid();
		return 'p-' + id;
	}

	function connect() {
		//let processedURl = new URL(url);
		//let host = processedURl.host;
		//let id = processedURl.searchParams.get('id');
		//for current version, used simple url as id
		let id = peerId;
		packageCount = 0;
		clearStatus(status);
		if (id == null || !id.startsWith('p-') || id.length !== 8) {
			setStatus(status, {
				text: [{ text: 'Illegal id provided', color: 'error' }]
			});
			return;
		}

		setStatus(status, {
			id: 'connect-to-server',
			text: [{ text: 'Connecting to server', color: '' }],
			loading: { state: 'loading' }
		});
		status.message = status.message;

		createPeer(id);
	}

	function createPeer(peerId: string) {
		//let peer = new Peer({ host: host, port: 9000, path: '/' });
		//use default server for prototyping
		let peer = new Peer(generateID());
		peer.on('open', function (id) {
			connectPeer(peer, peerId);
			setStatus(status, {
				id: 'connect-to-server',
				text: [{ text: 'Connecting to server', color: '' }],
				loading: { state: 'success' }
			});
			setStatus(status, {
				text: [
					{ text: 'My id :', color: '' },
					{ text: id, color: 'primary' }
				]
			});
			status.message = status.message;
		});
		peer.on('connection', function (conn) {});
		peer.on('error', function (err) {
			//peerjs eventemitter error type doesn't have type property
			let error = err as any;
			if (error.type === 'peer-unavailable') {
				setStatus(status, {
					text: [{ text: `ID doesn't exist.`, color: 'error' }]
				});
			} else {
				setStatus(status, {
					text: [{ text: 'Server connection error', color: 'error' }]
				});
			}
			status.message = status.message;
			console.log(err);
		});
	}

	function connectPeer(peer: Peer, id: string) {
		if (conn) {
			conn.close();
		}

		conn = peer.connect(id, {
			metadata: metadata,
			serialization: 'json'
		});
		// on open will be launch when you successfully connect to PeerServer
		conn.on('open', function () {
			// here you have conn.id
			setStatus(status, {
				text: [
					{ text: 'Connected to peer id : ', color: '' },
					{ text: id, color: 'primary' }
				]
			});
			setStatus(status, {
				id: 'check-version',
				text: [{ text: 'Checking version', color: '' }],
				loading: { state: 'loading' }
			});
			status.message = status.message;
		});

		conn.on('close', function () {
			if (!checkVersion) {
				setStatus(status, {
					id: 'check-version',
					text: [{ text: 'Checking version', color: '' }],
					loading: { state: 'failed' }
				});
				setStatus(status, {
					text: [
						{ text: 'Your version ', color: '' },
						{ text: metadata.version, color: 'primary' },
						{ text: ' is outdated. Please refresh your page.', color: '' }
					]
				});
				status.message = status.message;
			}
			checkVersion = false;
		});

		conn.on('data', function (data: unknown) {
			if (data) {
				let decodedData = data as Data;

				if (decodedData.connection) {
					if (!checkVersion) {
						setStatus(status, {
							id: 'check-version',
							text: [{ text: 'Checking version', color: '' }],
							loading: { state: 'success' }
						});
						status.message = status.message;
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
					blendshapesValue = blendshapes;
					if (websocketOpen) {
						websocket.sendWebsocketMessage('/phiz/blendshapes', ...blendshapesValue);
					}
				}

				//eye rotation
				if (leftEye && rightEye && leftEye.length === 4 && rightEye.length === 4) {
					if (websocketOpen) {
						websocket.sendWebsocketMessage('/phiz/leftEyeRotation', ...leftEye);
						websocket.sendWebsocketMessage('/phiz/rightEyeRotation', ...rightEye);
					}
				}

				//quaternion
				if (headRotation && headRotation.length === 4) {
					if (websocketOpen) {
						websocket.sendWebsocketMessage('/phiz/headRotation', ...headRotation);
					}
				}

				//time
				if (dataSecond && dataMillisecond) {
					let date = new Date();
					latency =
						(date.getSeconds() - dataSecond) * 1000 + date.getMilliseconds() - dataMillisecond;
					console.log(date.getSeconds(), dataSecond, date.getMilliseconds(), dataMillisecond);
				}

				//packageCount
				packageCount++;
				packageSuccessRate = (packageCount / decodedData.packageCount) * 100;
			}
		});

		conn.on('error', function (err) {
			setStatus(status, {
				text: [{ text: 'Peer connection error', color: 'error' }]
			});
			status.message = status.message;
			console.log(err);
		});
	}
</script>

<main class="p-4 h-full w-full flex justify-center overflow-y-auto">
	<div class="flex flex-col h-full w-full max-w-2xl">
		<div id="url-slot" class="flex gap-2">
			<input type="text" bind:value={peerId} placeholder="Paste ID from website" class="input" />
			<button type="button" class="btn variant-filled-primary btn-base" on:click={connect}>
				Connect
			</button>
		</div>
		<div class="card mt-2 p-2 h-36 min-h-36 overflow-hidden flex flex-col flex-none">
			<p class="font-bold">Status</p>
			<hr />
			<div class="h-full overflow-y-scroll">
				{#each status.message as s}
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
								<div class="h-4 w-4"><ProgressRadial stroke={40} class="h-4 w-4" /></div>
							{:else if s.loading.state === 'success'}
								<p class="text-success-500">&#x2713;</p>
							{:else if s.loading.state === 'failed'}
								<p class="text-error-500">&#x2715;</p>
							{/if}
						{/if}
					</div>
				{/each}
			</div>
		</div>
		<div class="card p-2 mt-2">
			<p class="font-bold">Connect to websocket</p>
			<hr />
			<Websocket bind:websocket bind:websocketOpen />
		</div>

		<Accordion autocollapse spacing={''} class="card mt-2">
			<!-- Open -->
			<AccordionItem>
				<svelte:fragment slot="lead"><p class="font-bold">Data</p></svelte:fragment>
				<svelte:fragment slot="summary">
					<div class="hidden" />
				</svelte:fragment>

				<svelte:fragment slot="content">
					<p class="">Latency: {latency} millisecond</p>
					<p>Package received: {packageSuccessRate.toFixed(2)}%</p>
					<hr />
					<div class="flex flex-col pt-2">
						<ul class="h-full">
							{#each blendshapeName as blendshape, i}
								<li class="flex">
									<p class="w-48">{blendshape}:</p>
									<p id="{i}-shape">{blendshapesValue[i]?.toFixed(2)}</p>
								</li>
							{/each}
						</ul>
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</main>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
