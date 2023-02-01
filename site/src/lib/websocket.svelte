<script lang="ts">
	import { connectWebsocket, sendWebsocketMessage as websocketMessage } from '$lib/websocket';
	let websocketURL: string = 'localhost';
	let websocketPort: number = 9912;
	let websocketURLValidation: string = '';
	let websocketPortValidation: string = '';
	let websocketError: string = '';
	let websocketStatus: string = '';
	let websocketStatusClass: string = '';
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
			websocketMessage(address, ...input);
		}
	};
</script>

<div>
	<p id="link-description" class="">
		To connect to your local websocket server (in Unity, Unreal, etc.) Please enter the host url and
		port.
	</p>
	<div class="flex gap-2 flex-wrap lg:flex-nowrap mt-2">
		<input
			type="text"
			placeholder="host url"
			class="!w-min-56 {websocketURLValidation}"
			bind:value={websocketURL}
		/>
		<input
			type="number"
			placeholder="port"
			class={websocketPortValidation}
			bind:value={websocketPort}
		/>
		<button class="btn variant-filled-secondary btn-base" on:click={setWebsocket}>Connect</button>
	</div>
	<p class="text-error-500">{websocketError}</p>
	<p class={websocketStatusClass}>{websocketStatus}</p>
</div>
