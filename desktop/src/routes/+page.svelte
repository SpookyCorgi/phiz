<script lang="ts">
	import type { DataConnection } from 'peerjs';
	import Peer from 'peerjs';
	import { blendshapesName } from './blendshapes';

	let url: string;
	let status: string = 'Not connected';
	let conn: DataConnection | null = null;
	let blendshapesValue: number[] = [];
	let latency: number = 0;
	let packageCount: number = 0;

	function getTime() {
		const date = new Date();
		let time = date.getTime();
		let second = Math.floor(time / 1000) - Math.floor(time / 100000) * 100;
		let hundredth = Math.round((time - Math.floor(time / 1000) * 1000) / 10);
		if (hundredth === 100) {
			second += 1;
			hundredth = 0;
		}
		return [second, hundredth];
	}

	function setStatus(statusText: string) {
		status += statusText;
	}

	function clearStatus() {
		status = '';
	}

	function connect() {
		let processedURl = new URL(url);
		let host = processedURl.host;
		let id = processedURl.searchParams.get('id');
		packageCount = 0;
		clearStatus();
		if (id == null) {
			setStatus('No id provided');
			return;
		}
		setStatus(`Connecting to server: ${host}\r\n`);
		createPeer(host, id);
	}

	function createPeer(host: string, peerId: string) {
		//let peer = new Peer({ host: host, port: 9000, path: '/' });
		//use default server for prototyping
		let peer = new Peer();
		peer.on('open', function (id) {
			connectPeer(peer, peerId);
			setStatus(`Connected to signalling server.\nMy id : ${id}\r\n`);
		});
		peer.on('connection', function (conn) {});
	}

	function connectPeer(peer: Peer, id: string) {
		if (conn) {
			conn.close();
		}

		conn = peer.connect(id, { serialization: 'json' });
		// on open will be launch when you successfully connect to PeerServer
		conn.on('open', function () {
			// here you have conn.id
			setStatus(`Connected to peer\nPeer id : ${id}!`);
			if (window.electron) {
				window.electron.send('open-osc-server');
			}
		});
		conn.on('data', function (data: unknown) {
			if (data instanceof Object) {
				let blendshapes = Object.values(data);
				if (blendshapes && blendshapes.length === blendshapesName.length + 2) {
					let arr = Array.from(blendshapes);

					let hundredth = arr.pop();
					let second = arr.pop();
					let [secondNow, hundredthNow] = getTime();
					if (second && hundredth) {
						latency = (secondNow * 100 + hundredthNow - second * 100 - hundredth) * 10;
					}

					packageCount++;
					if (window.electron) {
						window.electron.send('set-blendshapes', [blendshapesName, arr]);
					}

					blendshapesValue = arr;
				}
			}
		});
	}
</script>

<main>
	<div id="url-slot">
		<input type="text" bind:value={url} id="input-slot" />
		<button type="button" on:click={connect}>Connect</button>
	</div>

	<div id="status">
		<p>Status</p>
		<p id="status-content">{status}</p>
	</div>
	<p id="latency">Latency: {latency} millisecond</p>
	<p id="package-count">Package count: {packageCount}</p>
	<ul id="blendshapes">
		{#each blendshapesName as blendshape, i}
			<li>
				<p id="blendshape-name">{blendshape}:</p>
				<p id="{i}-shape">{blendshapesValue[i] / 100}</p>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 32px;
		padding-right: 32px;
	}
	#status {
		width: 456px;
		max-width: 100%;
	}

	#status p {
		margin: 0;
		padding: 0;
		white-space: pre-wrap;
	}

	#status-content {
		color: var(--font-color-hover);
	}

	#latency {
		width: 456px;
		max-width: 100%;
	}

	#package-count {
		width: 456px;
		max-width: 100%;
	}

	#url-slot {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 16px;
		margin-top: 16px;
	}

	#input-slot {
		width: 320px;
		height: 32px;
	}

	#blendshapes {
		width: 456px;
		max-width: 100%;
		height: 100%;
		overflow-y: scroll;
		list-style: none;
		padding-left: 0;

		background-color: var(--secondary-background);
		padding: 16px;
	}

	li {
		display: flex;
	}

	#blendshape-name {
		width: 200px;
	}
</style>
