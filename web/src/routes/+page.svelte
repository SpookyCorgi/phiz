<script>
	import sheepy from '$lib/images/sheepy.gif';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Facial capture demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={sheepy} alt="Welcome" />
			</picture>
		</span>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
	}

	.welcome img {
		/*abosulte center*/
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, 0%);
		width: 50%;
	}
</style>
