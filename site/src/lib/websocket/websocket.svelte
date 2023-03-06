<script lang="ts">
	import { onMount } from 'svelte';
	import { connectWebsocket, sendWebsocketMessage as websocketMessage } from './websocket';
	let websocketURL: string = 'localhost';
	let websocketPort: number = 9912;
	let websocketURLValidation: string = '';
	let websocketPortValidation: string = '';
	let websocketError: string = '';
	let websocketStatus: string = '';
	let websocketStatusClass: string = '';

	let appSelect: HTMLSelectElement;
	let appList: string[] = ['unreal', 'unity'];
	let app: string = 'unreal';
	export let websocketOpen: boolean = false;

	function setWebsocket() {
		let valid = true;
		websocketOpen = false;
		if (!websocketURL) {
			websocketURLValidation = 'input-error';
			valid = false;
		} else {
			websocketURLValidation = '';
		}
		if (!(websocketPort > 0 && websocketPort < 65536)) {
			websocketPortValidation = 'input-error';
			valid = false;
		} else {
			websocketPortValidation = '';
		}

		if (valid) {
			connectWebsocket(
				app,
				websocketURL,
				websocketPort,
				() => {
					websocketStatus = 'Websocket connected';
					websocketError = '';
					websocketStatusClass = 'text-success-500';
					websocketOpen = true;
				},
				(e: Error) => {
					console.log(e);
					websocketError = 'Trouble connected to websocket';
				},
				() => {
					websocketOpen = false;
					websocketStatus = 'Websocket closed';
					websocketStatusClass = 'text-warning-500';
				}
			);
		}
	}

	export const websocket: any = {
		sendWebsocketMessage(address: string, ...input: any[]) {
			websocketMessage(app, address, ...input);
		}
	};

	onMount(() => {
		//change source when select changes
		appSelect.addEventListener('change', () => {
			app = appSelect.value;
		});
	});
</script>

<div>
	<p id="link-description" class="">
		To connect to your local websocket server (in Unity, Unreal, etc.) Please enter the host url and
		port.
	</p>
	<div class="w-64 flex items-center">
		<p class="whitespace-nowrap mr-2">App connecting:</p>
		<select bind:this={appSelect} class="select">
			{#each appList as app}
				<option value={app} class="text-sm">{app}</option>
			{/each}
		</select>
	</div>

	<div class="flex gap-2 flex-wrap lg:flex-nowrap mt-2">
		<input
			type="text"
			placeholder="host url"
			class="input !w-min-56 {websocketURLValidation}"
			bind:value={websocketURL}
		/>
		<input
			type="number"
			placeholder="port"
			class="input {websocketPortValidation}"
			bind:value={websocketPort}
		/>
		<button class="btn variant-filled-secondary btn-base" on:click={setWebsocket}>Connect</button>
	</div>
	<p class="text-error-500">{websocketError}</p>
	<p class={websocketStatusClass}>{websocketStatus}</p>
</div>
