<script lang="ts">
	//types

	//svelte
	import { onMount } from 'svelte';
	import { metadata } from '../../../../lib/metadata';
	import Footer from '$lib/footer/footer.svelte';

	onMount(() => {});
</script>

<main class="overflow-y-auto w-full h-full flex flex-col items-center">
	<div class="pt-4 px-4 w-full flex justify-center">
		<div class="w-full max-w-[1280px]">
			<h1>Downloads</h1>
			<p class="opacity-50">The latest version is {metadata.version}</p>
			<hr />
		</div>
	</div>

	<div class="pt-4 px-4 min-h-[320px] w-full flex justify-center">
		<div class="w-full max-w-[1280px]">
			<h2>Plugins</h2>
			<ul class="list">
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-unreal5.0-win64-v0.3.0.zip"
					>
						Unreal Engine 5.0 Windows
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-unreal5.1-win64-v0.3.0.zip"
					>
						Unreal Engine 5.1 Windows
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-unreal5.0-mac-v0.3.0.zip"
					>
						Unreal Engine 5.0 MacOS
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-unreal5.1-mac-v0.3.0.zip"
					>
						Unreal Engine 5.1 MacOS
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-unity-v0.3.0.zip"
					>
						Unity universal platform</a
					>
				</li>
			</ul>
			<p class="ml-2 mt-2">
				Please check the <a href="./docs">plugin document page</a> for using the plugins.
			</p>
		</div>
	</div>

	<div class="pt-4 px-4 min-h-[320px] w-full flex justify-center bg-surface-100-800-token">
		<div class="w-full max-w-[1280px]">
			<h2>Apps</h2>
			<ul class="list">
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-app-windows-v0.3.0.exe"
					>
						Windows
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-app-mac-v0.3.0.dmg"
					>
						MacOS
					</a>
				</li>
				<li>
					<a
						class=""
						href="https://github.com/SpookyCorgi/phiz/releases/download/v0.3.0/phiz-app-linux-v0.3.0.AppImage"
					>
						Linux
					</a>
				</li>
			</ul>
			<p class="ml-2 mt-2">
				Please check the <a href="./docs/osc-app/app-installation">app document page</a> for using the
				apps.
			</p>
		</div>
	</div>
	<div class="pt-4 px-4 min-h-[320px] w-full flex justify-center">
		<div class="w-full max-w-[1280px]">
			<h2>Examples</h2>
			<ul class="list">
				<li>
					<a class="" href="https://github.com/SpookyCorgi/phiz/tree/main/examples/OSC"
						>Pure Data synthesizer using the OSC data</a
					>
				</li>
			</ul>
		</div>
	</div>

	<hr class="w-full" />
	<div class="w-full px-4">
		<Footer className="w-full max-w-[1280px]" />
	</div>
</main>

<style>
</style>
