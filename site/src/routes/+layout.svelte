<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	import { Drawer } from '@skeletonlabs/skeleton';

	import LightSwitch from '../../../lib/ui/LightSwitch/LightSwitch.svelte';
	import logo from '$lib/images/logo.svg';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" title="Go to Homepage">
					<span class="hidden sm:flex flex-row items-center">
						<img src={logo} alt="Logo" />
						<span class="text-4xl pl-2">Phiz</span>
						<!-- <h1 class="pl-2">PHIZ</h1> -->
					</span>
					<span class="inline sm:hidden">
						<img src={logo} alt="Logo" />
					</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/capture" class="text-sm lg:text-base"> Capture </a>
				<a href="/receive" class="text-sm lg:text-base"> Receive </a>
				<a href="/playground" class="text-sm lg:text-base">Playground</a>
				<!-- <a href="/blendshape"> Facemesh</a> -->
				<span class="divider-vertical h-6" />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
<Toast />

<style>
</style>
