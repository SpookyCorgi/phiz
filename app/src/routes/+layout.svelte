<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { onMount } from 'svelte';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<slot />
{/if}

<style>
</style>
