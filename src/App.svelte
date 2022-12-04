<script>
  import svelteLogo from "./assets/svelte.svg";
  import Loading from "./lib/Loading.svelte";
  import Camera from "./lib/Camera.svelte";
  import Blendshapes from "./lib/Blendshapes.svelte";
  import Regression from "./lib/Regression.svelte";
  import { loop } from "svelte/internal";

  let camera;
  let blendshapes;
  let regression;

  function calibrate() {
    let geometryTransform = camera.getFaceGeometry();
    blendshapes.calibrate(geometryTransform);
    let customBlendshapes = blendshapes.getCustomBlendshapes();
    //regression.createCustomMesh(geometryTransform.vertices, customBlendshapes);
  }

  function mainLoop() {
    calculateWeight(
      camera.getFaceGeometry().vertices,
      blendshapes.getCustomBlendshapes()
    );
    mainLoop();
    requestAnimationFrame(mainLoop);
  }

  function calculateWeight(geometry, blendshapes) {
    let weight = regression.calculateWeight(geometry, blendshapes);
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
  <h1 class="title">Face Cap</h1>
  <div class="container">
    <div class="camera">
      <Camera bind:this={camera} />
    </div>
    <div class="result">
      <div class="blendshapes">
        <Blendshapes bind:this={blendshapes} />
      </div>
      <!-- <div class="regression">
        <Regression bind:this={regression} />
      </div> -->
    </div>
  </div>
  <div class="control">
    <button class="button" on:click={calibrate}> Calibrate </button>
  </div>
</main>

<style>
  main {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .title {
    text-align: center;
    width: 100%;
    font-size: xx-large;
  }
  .container {
    position: relative;
    width: 100%;
    height: 70%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .camera {
    position: relative;
    width: 100%;
    height: 60%;
    padding: 16px;
  }

  .result {
    position: relative;
    width: 100%;
    height: 40%;
  }

  .control {
    padding: 16px;
  }

  .blendshapes,
  .regression {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 16px;
  }

  @media (min-width: 1024px) {
    .container {
      flex-direction: row;
      max-height: 1024px;
    }
    .camera {
      width: 50%;
      height: 100%;
    }

    .result {
      position: relative;
      width: 30%;
      height: 100%;
    }
  }
</style>
