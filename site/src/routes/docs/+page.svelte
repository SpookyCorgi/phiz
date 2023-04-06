<script lang="ts">
	//svelte
	import { onMount } from 'svelte';
	import Footer from '$lib/footer/footer.svelte';
	import captureDataRemoteImg from '../../../../assets/capture-data-remote.png';
	import captureDataLocalImg from '../../../../assets/capture-data-local.png';
	import receiveDataImg from '../../../../assets/receive-data.png';
	import receiveDataAppImg from '../../../../assets/receive-data-app.png';
	import smoothingAndModelImg from '../../../../assets/smoothing-and-model.png';
	onMount(() => {});
</script>

<main class="overflow-y-auto overflow-x-hidden w-full h-full flex flex-col items-center">
	<div class="pt-4 px-4 pb-4 w-full flex justify-center">
		<div class="w-full max-w-[1280px]">
			<h1>Getting Started :D</h1>
		</div>
	</div>

	<div class="pt-4 px-4 w-full flex justify-center">
		<div class="w-full max-w-[1280px]">
			<h2 class="">What is Phiz?</h2>
			<hr class="mb-2" />
			<p class="w-full">
				Phiz is an open-source tool that gives you the power to do facial motion capture right in
				your browser, using the webcam on any mobile device or computer. You can then send the
				blendshape data, either locally or remotely, to another browser or popular game engines; you
				even have the option to broadcast the blendshape data through OSC protocol using Phiz's
				cross-platform app.
			</p>
			<h2 class="mt-8">How does it work?</h2>
			<hr class="mb-2" />
			<ul class="list">
				<li class="!whitespace-normal">
					<div>
						<h3>Facial Motion Capture... in Your Browser</h3>
						<p class="mt-2">
							Phiz's motion capture system was built using
							<a href="https://github.com/facemoji/mocap4face"> Mocap4face </a>
							and <a href="https://github.com/google/mediapipe">Google mediapipe's</a> machine
							learning model.
							<span class="font-bold">No iPhone LiDAR or RGBD camera needed!</span> The underlying ML
							code is not fixed and will be updated whenever there is a better model.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal mt-2">
					<div>
						<h3>Streaming Data: Unreal and Unity Support</h3>
						<p class="mt-2">
							Phiz includes custom plugins that fire up WebSocket servers within <a
								href="./docs/unreal/basic-usage">Unreal engine</a
							>
							and <a href="./docs/unity/basic-usage">Unity</a>, which are used to receive live data
							from your browser. The plugins also include convenient presets that you can easily use
							with popular 3D avatars, such as Metahumans and ReadyPlayerMe characters.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal mt-2">
					<div>
						<h3>Streaming Data: Browser to Browser & Browser to OSC App</h3>
						<p class="mt-2">
							Phiz uses WebRTC (the protocol used in video calling) to send data from one browser to
							another or from a browser to the app. However, no image or video is sent at all.
							WebRTC also allows for peer-to-peer secure connection and low latency.
						</p>
					</div>
				</li>

				<li class="!whitespace-normal mt-2">
					<div>
						<h3>ARKit support</h3>
						<p class="mt-2">
							Phiz uses the same blendshapes as ARKit. Check out the <a
								href="./docs/specs/blendshapes">Blendshapes page</a
							> for more information about the blendshape names and orders.
						</p>
					</div>
				</li>
			</ul>
			<h2 class="mt-8">How do I use it?</h2>
			<hr class="mb-2" />
			<p class="font-bold">Disclaimer: Ensure the browser page remains active during recording.</p>
			<ol class="list">
				<li class="!whitespace-normal">
					<p>
						1. Visit the <a href="./capture">capture page</a> and allow the website to access your camera.
					</p>
				</li>
				<li class="!whitespace-normal">
					<p>
						2. Select the correct camera, choose the desired frame smoothing, and decide whether to
						use sensitive motion capture or not.
					</p>
				</li>
				<li class="!whitespace-normal flex flex-col !items-start">
					<div>
						<p>3. Select one of the two methods to send the captured data:</p>
					</div>

					<span class="font-bold mt-2">Local:</span>
					<ul class="list w-full">
						<li class="!whitespace-normal">
							<p>
								- Use Phiz's custom plugin to send data directly to
								<a href="./docs/unreal/basic-usage">Unreal engine</a>
								or <a href="./docs/unity/basic-usage">Unity</a> using your defined URL and port.
							</p>
						</li>
						<li class="!whitespace-normal">
							<p>- Check out their documentation for more information.</p>
						</li>
					</ul>

					<span class="font-bold mt-2">Remote:</span>
					<ul class="list w-full">
						<li class="!whitespace-normal">
							<p>- Click on the 8-character code starting with "p-" (e.g., p-AwCodE) to copy it.</p>
						</li>
						<li class="!whitespace-normal flex flex-col !items-start">
							<p>
								- To send data to another device (e.g., recording on phone and controlling avatar in
								Unreal on PC):
							</p>
							<ol class="list">
								<li class="!whitespace-normal">
									<p>
										1. Open the <a href="./receive">receive page</a> on another device.
									</p>
								</li>
								<li class="!whitespace-normal">
									<p>2. Paste the copied 8-character code.</p>
								</li>
								<li class="!whitespace-normal">
									<p>
										3. You should now see live streaming data on your device and be able to share it
										locally.
									</p>
								</li>
							</ol>
						</li>
						<li class="!whitespace-normal flex flex-col !items-start">
							<p>- To send data to the Phiz App for broadcasting OSC data:</p>
							<ol class="list">
								<li class="!whitespace-normal">
									<p>
										1. Download and install the <a href="./downloads">Phiz App</a> for your platform.
									</p>
								</li>
								<li class="!whitespace-normal">
									<p>2. Open the app and paste the 8-character code.</p>
								</li>
								<li class="!whitespace-normal">
									<p>3. The data will now be available in OSC format on your chosen port.</p>
								</li>
							</ol>
						</li>
						<li class="!whitespace-normal">
							If everything is correctly connected but no data is showing up, try refreshing the
							page to generate a new code.
						</li>
					</ul>
				</li>
			</ol>
			<h2 class="mt-8">Apps & Plugins</h2>
			<p>
				Check out other documentation pages. If you are on mobile, press the menu button on the top
				left.
			</p>
		</div>
	</div>
	<div class="flex-grow" />

	<hr class="w-full mt-12" />
	<div class="w-full px-4">
		<Footer className="w-full max-w-[1280px]" />
	</div>
</main>

<style>
</style>
