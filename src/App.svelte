<script>
  import svelteLogo from "./assets/svelte.svg";
  import Loading from "./lib/Loading.svelte";
  import Camera from "./lib/Camera.svelte";
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
  <div class="camera">
    <Camera />
  </div>
  <Loading />
</main>

<style>
  main {
    height: 100%;
    width: 100%;
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

  @media (min-width: 1024px) {
    main {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .camera {
      width: 50%;
      height: 100%;
    }
  }
</style>
