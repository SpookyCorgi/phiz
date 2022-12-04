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
    let customBlendshapes = [];

    let shapeDifference = {};

    const cameraConfig = {
        FOV: 50,
        near: 0.1,
        far: 1000,
    };

    function calculateShapes() {
        for (const [key, value] of Object.entries(data)) {
            shapeDifference[key] = value.map((v, i) => v - data["neutral"][i]);
        }
    }

    function setupThree() {
        Object.values(data).forEach((vertices, i) => {
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

            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(Float32Array.from(vertices), 3)
            );
            geometry.setIndex(indices);
            geometry.computeVertexNormals();

            let diff = Object.values(shapeDifference)[i];

            let colors = [];
            for (let j = 0; j < diff.length / 3; j++) {
                let x = diff[j * 3];
                let y = diff[j * 3 + 1];
                let z = diff[j * 3 + 2];
                let color = new THREE.Color(0xffffff);
                if (x * x + y * y + z * z > 0.000001) {
                    color = new THREE.Color(0x68d2e8);
                }
                colors.push(color.r, color.g, color.b);
            }
            geometry.setAttribute(
                "color",
                new THREE.Float32BufferAttribute(colors, 3)
            );

            const material = new THREE.MeshStandardMaterial({
                //color: new THREE.Color(0x68d2e8),
                vertexColors: true,
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
        calculateShapes();
        setupThree();
        animate();
    });

    export function getCustomBlendshapes() {
        return customBlendshapes;
    }

    export function calibrate(geometryTransform) {
        if (geometryTransform.vertices != null) {
            if (generateScenes.length > 0) {
                generateScenes.forEach((scene, i) => {
                    const base = geometryTransform.vertices.slice(0, 468 * 3);
                    let diff = Object.values(shapeDifference)[i];
                    let sum = base.map(function (num, idx) {
                        return num * 0.01 + diff[idx];
                    });
                    customBlendshapes[i] = sum;

                    scene.children[0].geometry.setAttribute(
                        "position",
                        new THREE.BufferAttribute(Float32Array.from(sum), 3)
                    );

                    scene.children[0].geometry.attributes.position.needsUpdate = true;
                });
            } else {
                Object.values(shapeDifference).forEach((diff, i) => {
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
                    const base = geometryTransform.vertices.slice(0, 468 * 3);
                    let sum = base.map(function (num, idx) {
                        return num * 0.01 + diff[idx];
                    });
                    customBlendshapes.push(sum);

                    geometry.setAttribute(
                        "position",
                        new THREE.BufferAttribute(Float32Array.from(sum), 3)
                    );
                    //geometry.scale(0.01, 0.01, 0.01);
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

        border-style: solid;
        border-color: #68d2e8;
        border-width: 2px;
        border-radius: 10px;

        padding: 8px;
    }

    .container {
        position: relative;
        width: 100%;
        height: 100%;
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
        height: 100%;

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
    }
</style>
