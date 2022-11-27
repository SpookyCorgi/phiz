<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { data, names } from "../data/blendshapes";
    import { FACES as indices, UVS as texCoords } from "../data/geometry";

    let referenceCanvas = [];
    let generateCanvas = [];
    let referenceScenes = [];
    let generateScenes = [];
    let renderer;
    let canvas;
    let container;

    const cameraConfig = {
        FOV: 50,
        near: 0.1,
        far: 1000,
    };

    function setupThree() {
        names.forEach((name, i) => {
            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(
                cameraConfig.FOV,
                1,
                cameraConfig.near,
                cameraConfig.far
            );
            camera.position.z = 0.3;
            scene.userData.camera = camera;

            const geometry = new THREE.BufferGeometry();
            const vertices = data[i];

            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(Float32Array.from(vertices), 3)
            );
            geometry.setIndex(indices);
            geometry.computeVertexNormals();

            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0x68d2e8),
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, 1, 1);
            scene.add(light);

            referenceScenes.push(scene);
        });

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setClearColor(0xffffff, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    function animate() {
        render();
        requestAnimationFrame(animate);
    }

    function updateSize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width || canvas.height !== height) {
            renderer.setSize(width, height, false);
        }
    }

    function render() {
        updateSize();
        canvas.style.transform = `translateY(${container.scrollTop}px)`;

        renderer.setClearColor(0x000000, 0);
        renderer.setScissorTest(false);
        renderer.clear();

        renderer.setClearColor(0xffffff, 0.1);
        renderer.setScissorTest(true);

        referenceScenes.forEach((scene, index) => {
            const rect = referenceCanvas[index].getBoundingClientRect();
            let rendererRect = renderer.domElement.getBoundingClientRect();
            // check if it's offscreen. If so skip it
            if (
                rect.bottom > rendererRect.bottom + rect.height ||
                rect.top + rect.height < rendererRect.top ||
                rect.right > rendererRect.right ||
                rect.left < rendererRect.left
            ) {
                return; // it's off screen
            }
            // set the viewport
            const width = rect.right - rect.left;
            const height = rect.bottom - rect.top;
            //temp fix for padding
            const left = rect.left - rendererRect.left;
            const bottom = rendererRect.bottom - rect.bottom;

            renderer.setViewport(left, bottom, width, height);
            renderer.setScissor(left, bottom, width, height);

            const camera = scene.userData.camera;

            renderer.render(scene, camera);
        });

        generateScenes.forEach((scene, index) => {
            const rect = generateCanvas[index].getBoundingClientRect();
            let rendererRect = renderer.domElement.getBoundingClientRect();
            // check if it's offscreen. If so skip it

            if (
                rect.bottom > rendererRect.bottom + rect.height ||
                rect.top + rect.height < rendererRect.top ||
                rect.right > rendererRect.right ||
                rect.left < rendererRect.left
            ) {
                return; // it's off screen
            }
            // set the viewport
            const width = rect.right - rect.left;
            const height = rect.bottom - rect.top;
            //temp fix for padding
            const left = rect.left - rendererRect.left;
            const bottom = rendererRect.bottom - rect.bottom;

            renderer.setViewport(left, bottom, width, height);
            renderer.setScissor(left, bottom, width, height);

            const camera = scene.userData.camera;

            renderer.render(scene, camera);
        });
    }

    onMount(() => {
        setupThree();
        animate();
    });

    export function calibrate(geometryTransform) {
        if (geometryTransform.vertices != null) {
            if (generateScenes.length > 0) {
                generateScenes.forEach((scene) => {
                    scene.children[0].geometry.setAttribute(
                        "position",
                        new THREE.BufferAttribute(
                            Float32Array.from(geometryTransform.vertices),
                            3
                        )
                    );
                    scene.children[0].geometry.scale(0.01, 0.01, 0.01);

                    scene.children[0].geometry.attributes.position.needsUpdate = true;
                });
            } else {
                names.forEach((name, i) => {
                    const scene = new THREE.Scene();

                    const camera = new THREE.PerspectiveCamera(
                        cameraConfig.FOV,
                        1,
                        cameraConfig.near,
                        cameraConfig.far
                    );
                    camera.position.z = 0.3;
                    scene.userData.camera = camera;

                    const geometry = new THREE.BufferGeometry();
                    const vertices = geometryTransform.vertices;

                    geometry.setAttribute(
                        "position",
                        new THREE.BufferAttribute(
                            Float32Array.from(geometryTransform.vertices),
                            3
                        )
                    );
                    geometry.scale(0.01, 0.01, 0.01);
                    geometry.setIndex(indices);
                    geometry.computeVertexNormals();

                    const material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color(0x68d2e8),
                    });
                    const mesh = new THREE.Mesh(geometry, material);
                    scene.add(mesh);

                    const light = new THREE.DirectionalLight(0xffffff);
                    light.position.set(0, 1, 1);
                    scene.add(light);

                    generateScenes.push(scene);
                });
            }
        }
    }
</script>

<main>
    <div class="container" bind:this={container}>
        <div class="shapes">
            {#each names as shapes, index}
                <div class="shape-container">
                    <h5>{shapes}</h5>
                    <div class="canvas-container">
                        <div bind:this={referenceCanvas[index]} class="grid" />
                        <div bind:this={generateCanvas[index]} class="grid" />
                    </div>
                </div>
            {/each}
        </div>
        <canvas class="canvas" bind:this={canvas} />
    </div>
</main>

<style>
    main {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        position: relative;
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .shapes {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .shape-container {
        position: relative;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .canvas-container {
        position: relative;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .grid {
        width: 100%;
        aspect-ratio: 1/1;
    }

    .canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1024px) {
        .container {
            width: 80%;
            height: auto;
            aspect-ratio: 1/1;
        }
    }
</style>
