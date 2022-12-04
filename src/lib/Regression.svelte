<script>
    import { onMount } from "svelte";
    import { data, names } from "../data/blendshapes";
    import * as THREE from "three";
    import { FACES as indices, UVS as texCoords } from "../data/geometry";

    let canvas, container;
    let scene, renderer, threeCamera, clock;
    let width, height;
    let mesh;
    let meshCreated = false;

    export function createCustomMesh(vertices, blendshapes) {
        let geometry;
        if (!meshCreated) {
            geometry = new THREE.BufferGeometry();
        } else {
            geometry = mesh.geometry;
        }
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(Float32Array.from(vertices), 3)
        );
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        let morphAttributes = [];
        blendshapes.forEach((blendshape, i) => {
            // Set up morph target attributes.
            let arr = blendshape.map((v, i) => v * 100);
            let posAttr = new THREE.BufferAttribute(Float32Array.from(arr), 3);
            morphAttributes.push(posAttr);
        });
        geometry.morphAttributes.position = morphAttributes;

        if (!meshCreated) {
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xffffff),
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.updateMorphTargets();

            mesh.morphTargetInfluences[24] = 1.0;

            scene.add(mesh);
            meshCreated = true;
        } else {
            mesh.updateMorphTargets();

            mesh.morphTargetInfluences[24] = 0.0;
        }
        animate();
    }

    export function calculateWeight(geometry, blendshapes) {
        console.log(geometry, blendshapes);
    }

    function setupThree() {
        scene = new THREE.Scene();
        clock = new THREE.Clock();

        //set up renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        //set up camera
        threeCamera = new THREE.PerspectiveCamera(
            50,
            width / height,
            0.1,
            1000
        );
        threeCamera.position.z = 50;
        //add lights
        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 1, 1);
        scene.add(light);
    }

    function animate() {
        let elapsedTime = clock.getElapsedTime();
        mesh.morphTargetInfluences[24] = (Math.sin(elapsedTime) + 1) / 2;
        requestAnimationFrame(animate);
        renderer.render(scene, threeCamera);
    }

    onMount(() => {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        setupThree();
    });
</script>

<main>
    <div bind:this={container} class="container">
        <canvas bind:this={canvas} class="three-canvas" />
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
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        position: relative;
    }
    .three-canvas {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
