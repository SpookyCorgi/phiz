<script>
	import unrealVideo from '$lib/assets/unreal.mp4';
	import playgroundVideo from '$lib/assets/playground.mp4';
	import osImg from '$lib/assets/os.png';
	import webRTCVideo from '$lib/assets/webrtc.mp4';
	import Footer from '$lib//footer/footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Facial capture demo app" />
</svelte:head>

<main class="overflow-y-auto w-full h-full">
	<section class="">
		<div class="text-center py-8 lg:py-12">
			<h1 class="whitespace-nowrap text-5xl md:text-6xl lg:text-7xl font-bold">Facial MoCap</h1>
			<h1>
				<span
					class="bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone
					text-5xl md:text-6xl lg:text-7xl font-bold"
				>
					Anywhere
				</span>
			</h1>
			<h1>
				<span
					class="bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone
					text-5xl md:text-6xl lg:text-7xl font-bold"
				>
					Any Device
				</span>
			</h1>
		</div>
		<div class="flex flex-wrap justify-center gap-2">
			<a class="btn variant-filled-primary btn-base" href="/capture">Capture</a>
			<a class="btn variant-filled-secondary btn-base" href="/receive">Receive data</a>
			<a class="btn variant-filled-tertiary btn-base !text-on-primary-token" href="/docs"
				>Getting Started</a
			>
		</div>
		<div class="flex justify-center bg-surface-100-800-token mt-16 lg:mt-24 px-4 py-8">
			<div class="flex flex-wrap max-w-[1280px]">
				<video
					autoplay
					playsinline
					muted
					loop
					src={unrealVideo}
					class="w-full mb-8 lg:m-0 lg:w-8/12 shadow-lg"
				/>
				<div class="w-full lg:w-4/12 flex flex-col justify-center lg:pl-8">
					<h2 class="font-bold">Easy setup, Various support.</h2>
					<p class="mt-2">
						Facial mocap from your browser to directly inside Unreal Engine and Unity.
					</p>
					<p>Any OSC compatible software are also supported with extra Phiz App installed.</p>
					<a class="mt-4 w-fit btn variant-outline-primary btn-base" href="/docs">Tutorials</a>
				</div>
			</div>
		</div>
		<div class="flex justify-center bg-surface-50-900-token px-4 py-8">
			<div class="flex flex-wrap-reverse max-w-[1280px]">
				<div class="w-full lg:w-4/12 lg:pr-8 flex flex-col justify-center">
					<h2 class="font-bold">Have a camera and a browser? You're all set.</h2>
					<p class="mt-2">Works on Windows, Mac, Linux, Android and iOS.</p>
					<p>No lidar or fancy camera needed. Works with just your webcam.</p>
				</div>
				<img src={osImg} class="w-full mb-8 lg:m-0 lg:w-8/12 shadow-lg" alt="os" />
			</div>
		</div>
		<div class="flex justify-center bg-surface-100-800-token px-4 py-8">
			<div class="flex flex-wrap max-w-[1280px]">
				<video
					autoplay
					playsinline
					muted
					loop
					src={webRTCVideo}
					class="w-full mb-8 lg:m-0 lg:w-8/12 shadow-lg"
				/>
				<div class="w-full lg:w-4/12 lg:pl-8 flex flex-col justify-center">
					<h2 class="font-bold">Without limit</h2>
					<p>
						Recording with your phone and editing on your computer? Live stream your data with just
						a link!
					</p>
					<p>Secure connection with low latency from anywhere around the world.</p>
					<div class="mt-4">
						<a class="w-fit btn variant-outline-primary btn-base mr-2" href="/capture">Capture</a>
						<a class="w-fit btn variant-outline-secondary btn-base" href="/receive">Receive Data</a>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center bg-surface-50-900-token px-4 py-8">
			<div class="flex flex-wrap-reverse max-w-[1280px]">
				<div class="w-full lg:w-4/12 flex flex-col justify-center lg:pr-8">
					<h2 class="font-bold">Face mocap + body animation in the browser?!</h2>
					<p class="mt-2">
						Web playground by drag-and-dropping readyplayme avatar and mixamo animation.
					</p>
					<a class="mt-4 w-fit btn variant-outline-primary btn-base" href="/playground"
						>Web Playground</a
					>
				</div>
				<video
					autoplay
					playsinline
					muted
					loop
					src={playgroundVideo}
					class="w-full mb-8 lg:m-0 lg:w-8/12 shadow-lg"
				/>
			</div>
		</div>
		<div class="flex justify-center bg-surface-100-800-token px-4 py-8 h-[480px]">
			<div class="flex flex-wrap-reverse w-[1280px]">
				<div class="w-full pb-8 flex flex-col justify-center">
					<h2 class="font-bold">For the community</h2>
					<p>
						The whole project is opensource! Checkout the github repo and help the project improve
						:)
					</p>
					<div class="mt-4">
						<a
							class="btn variant-filled-tertiary btn-base"
							href="https://github.com/SpookyCorgi/phiz"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								viewBox="0 0 512 512"
								class="svg-icon inline-block outline-none fill-current w-5 h-5 mr-2"
								focusable="false"
								data-testid="svg-icon"
							>
								<path
									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
								/>
							</svg>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>

		<hr />
		<div class="w-full px-4">
			<Footer className="w-full max-w-[1280px]" />
		</div>
	</section>
</main>

<style>
</style>
