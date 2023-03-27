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
			<hr />
			<p class="w-full">
				Phiz lets you do facial motion capture right in your browser using your webcam on any mobile
				device or computer. You can then send the data to another browser, popular game engine or
				broadcast as OSC data using Phiz's crossplatform app.
			</p>
			<h2 class="mt-8">How does it work?</h2>
			<hr />
			<ul class="list">
				<li class="!whitespace-normal">
					<div>
						<h3>Facial motion capture in your browser</h3>
						<p>
							Phiz uses a combination of
							<a href="https://github.com/facemoji/mocap4face"> Mocap4face </a>
							and <a href="https://github.com/google/mediapipe">Google mediapipe's</a> machine
							learning model for motion capture.
							<span class="font-bold">No iPhone lidar or RGBD camera needed!</span> This is also not
							fixed and will be updated whenever there is a better model.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal">
					<div>
						<h3>Streaming data browser to browser & browser to OSC app</h3>
						<p>
							Phiz uses WebRTC (same protocal as you do video calling) to send data from browser to
							browser and browser to app. However, no image or video is sent at all. WebRTC also
							allow us to have peer-to-peer secure connection and low latency.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal">
					<div>
						<h3>Unreal and Unity support</h3>
						<p>
							Phiz includes custom plugins that fires up WebSocket servers within <a
								href="./docs/unreal/basic-usage">Unreal engine</a
							>
							and <a href="./docs/unity/basic-usage">Unity</a> to receive live data from your browser.
							The plugins also include convinient presets for popular avatars such as Metahuman and ReadyPlayerMe.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal">
					<div>
						<h3>ARkit support</h3>
						<p>
							Phiz uses the same blendshapes as arkit. Checkout <a href="./docs/specs/blendshapes"
								>the specs page</a
							> for the blendshape names and orders.
						</p>
					</div>
				</li>
			</ul>
			<h2 class="mt-8">How do I use it?</h2>
			<hr />
			<p class="opacity-50">
				Important! The browser page needs to be active when recording. If you closed your phone,
				refresh the page to generate a new code.
			</p>
			<img
				src={smoothingAndModelImg}
				alt="smoothing and model"
				class="border-token border-secondary-500 border-opacity-20 w-full max-w-screen-sm mt-2"
			/>
			<p>
				Navigate to the <a href="./capture">capture page</a> and allow the website to use your camera.
				You can then select the smoothing of the frame and select different types of motion capture ML
				model.
			</p>
			<p>There are two ways to send the captured data.</p>
			<ul class="list">
				<li class="!whitespace-normal">
					<div>
						<h3>Local</h3>
						<img
							src={captureDataLocalImg}
							alt="capture data local"
							class="border-token border-secondary-500 border-opacity-20 w-full max-w-screen-sm mt-2"
						/>
						<p>
							In local mode, using Phiz's custom plugin you can send the data to directly inside
							<a href="./docs/unreal/basic-usage">Unreal engine</a>
							or <a href="./docs/unity/basic-usage">Unity</a> with your defined url and port. See the
							documents for more details.
						</p>
					</div>
				</li>
				<li class="!whitespace-normal">
					<div>
						<h3>Remote</h3>
						<img
							src={captureDataRemoteImg}
							alt="capture data remote"
							class="border-token border-secondary-500 border-opacity-20 w-full max-w-screen-sm mt-2"
						/>
						<p>Click on the 8 character code to copy.</p>
						<ul class="list">
							<li class="!whitespace-normal">
								<div>
									<h4>Sending the data to another device</h4>
									<p>
										Open up the <a href="./receive">receive page</a> on another device. Paste the 8 character
										code your just copied. You should see the data live streaming on your device now
										:).
									</p>
									<img
										src={receiveDataImg}
										alt="receive data"
										class="border-token border-secondary-500 border-opacity-20 w-full max-w-screen-sm mt-2"
									/>
								</div>
							</li>
							<li class="!whitespace-normal">
								<div>
									<h4>Sending the data to Phiz App to broadcast OSC data</h4>
									<p>
										<a href="./downloads">Install the Phiz App</a> for your platform. Open the app and
										paste the 8 character code. Now the data will be avaible in OSC format in your choosen
										port.
									</p>
									<img
										src={receiveDataAppImg}
										alt="receive data app"
										class="border-token border-secondary-500 border-opacity-20 w-full max-w-screen-sm mt-2"
									/>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
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
