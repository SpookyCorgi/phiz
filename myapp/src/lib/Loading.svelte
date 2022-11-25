<script>
    import { onMount } from "svelte";

    let cube;

    function spin(angle) {
        if (cube) {
            let rot = -Math.sqrt(angle % (Math.PI / 2));
            cube.style.transform = `rotateX(${rot}rad)`;
        }
    }

    onMount(() => {
        let i = 0;
        setInterval(() => {
            spin(i);
            i += 0.1;
        }, 50);
    });
</script>

<main>
    <div id="container">
        <div bind:this={cube} id="cube">
            <svg
                id="top"
                width="60"
                height="60"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: none; stroke: white"
            >
                <path d="M 0,0 l 60,0 l 0,60 l -60,0 l 0,-60" fill: black />
                <path d="M 0,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 0,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 0,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path
                    d="M 0,0 l 60,0 l 0,60 l -60,0 l 0,-60"
                    stroke-width="3"
                />
            </svg>
            <svg
                id="bottom"
                width="60"
                height="60"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: none; stroke: white;"
            >
                <path d="M 0,0 l 60,0 l 0,60 l -60,0 l 0,-60" fill: black />
                <path d="M 0,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,0 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 0,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,20 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 0,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 20,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path d="M 40,40 l 20,0 l 0,20 l -20,0 l 0,-20" />
                <path
                    d="M 0,0 l 60,0 l 0,60 l -60,0 l 0,-60"
                    stroke-width="3"
                />
            </svg>
        </div>
    </div>
</main>

<style>
    #cube {
        position: relative;
        width: 60px;
        height: 60px;
        transform-style: preserve-3d;
    }

    #top {
        position: absolute;
        transform: rotateX(90deg) translateZ(30px);
    }

    #bottom {
        position: absolute;
        transform: rotateY(0deg) translateZ(30px);
    }

    #container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        perspective: 240px;
        background-color: black;
    }

    main {
        width: 100%;
        height: 100%;
    }
</style>
