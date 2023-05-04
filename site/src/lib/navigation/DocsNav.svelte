<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 flex flex-col">
	<h2 class="p-4">Documents</h2>

	<a href="/docs" on:click={drawerClose}><span>Getting started</span></a>

	<hr class="m-4" />
	<span class="px-4 font-bold text-primary-500">Unreal</span>
	<a href="/docs/unreal/basic-usage" on:click={drawerClose}><span>Unreal Basic Usage</span></a>
	<a href="/docs/unreal/metahuman-example" on:click={drawerClose}
		><span>Unreal Metahuman Example</span></a
	>

	<hr class="m-4" />
	<span class="px-4 font-bold text-primary-500">Unity</span>
	<a href="/docs/unity/basic-usage" on:click={drawerClose}><span>Unity Basic Usage</span></a>
	<a href="/docs/unity/ready-player-me-example" on:click={drawerClose}
		><span>Unity Ready Player Me Example</span></a
	>

	<hr class="m-4" />
	<span class="px-4 font-bold text-primary-500">OSC App</span>
	<a href="/docs/osc-app/app-installation" on:click={drawerClose}><span>App Installation</span></a>
	<a href="/docs/osc-app/puredata-example" on:click={drawerClose}><span>PureData Example</span></a>

	<hr class="m-4" />
	<span class="px-4 font-bold text-primary-500">Web Playground</span>
	<a href="/docs/web-playground/how-to-use" on:click={drawerClose}><span>How to use</span></a>

	<hr class="m-4" />
	<span class="px-4 font-bold text-primary-500">Data Format</span>
	<a href="/docs/data-format" on:click={drawerClose}><span>Data Format</span></a>
</nav>
