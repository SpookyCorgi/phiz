<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Toast, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import LightSwitch from '../../../lib/ui/LightSwitch/LightSwitch.svelte';
	import { page } from '$app/stores';

	import logo from '$lib/images/logo.svg';

	import DocsNav from '$lib/navigation/DocsNav.svelte';

	$: classesSidebar = $page.url.pathname === '/docs' ? 'w-0 lg:w-72' : 'w-0';
	$: classesHamburger = $page.url.pathname === '/docs' ? 'lg:hidden' : 'hidden';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer>
	<DocsNav />
</Drawer>
<AppShell slotPageContent="overflow-y-hidden" slotSidebarLeft="bg-surface-500/5 {classesSidebar}">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="{classesHamburger} btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
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
				<a href="/playground" class="text-sm lg:text-base hidden lg:block">Playground</a>
				<a href="/docs" class="text-sm lg:text-base">Docs</a>

				<!-- <a href="/blendshape"> Facemesh</a> -->
				<span class="divider-vertical h-6" />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<DocsNav />
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
<Toast />

<style>
</style>
