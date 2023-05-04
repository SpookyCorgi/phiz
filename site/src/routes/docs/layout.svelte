<script lang="ts">
	import Footer from '$lib/footer/footer.svelte';
</script>

<article class="overflow-y-auto overflow-x-hidden w-full h-full flex flex-col items-center">
	<div class="w-full pt-4 px-4 lg:px-8 lg:pt-8">
		<div
			class="prose dark:prose-invert prose-headings:font-normal prose-h2:text-4xl prose-p:text-base"
		>
			<slot class="" />
		</div>
		<div class="dark:hidden" id="tailwind-trigger-dark-hidden" />
		<div class="dark:block" id="tailwind-trigger-dark-block" />
	</div>
	<hr class="w-full mt-12" />
	<div class="w-full px-4 lg:px-8">
		<Footer className="w-full" />
	</div>
</article>
