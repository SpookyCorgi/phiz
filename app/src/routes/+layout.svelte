<script lang="ts">
	import './styles.css';

	import { onMount } from 'svelte';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<slot />
{/if}

<style>
</style>
