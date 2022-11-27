<script>
  import svelteLogo from "./assets/svelte.svg";
  import Loading from "./lib/Loading.svelte";
  import Camera from "./lib/Camera.svelte";
  import Blendshapes from "./lib/Blendshapes.svelte";

  let camera;
  let blendshapes;
  function calibrate() {
    let geometryTransform = camera.calibrate();
    blendshapes.calibrate(geometryTransform);
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<main>
  <div class="container">
    <div class="camera">
      <Camera bind:this={camera} />
    </div>
    <div class="result">
      <Blendshapes bind:this={blendshapes} />
    </div>
  </div>
  <div class="control">
    <button class="button" on:click={calibrate}> Calibrate </button>
  </div>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .camera {
    position: relative;
    width: 100%;
    height: 50%;
    padding: 20px;
  }

  .result {
    position: relative;
    width: 100%;
    height: 50%;
    padding: 20px;
  }

  .control {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    .container {
      flex-direction: row;
    }
    .camera {
      width: 50%;
      height: 100%;
      padding: 20px;
    }

    .result {
      position: relative;
      width: 50%;
      height: 100%;
      padding: 20px;
    }
  }
</style>
