<script>
    import Loading from "./Loading.svelte";
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { FaceMesh, matrixDataToMatrix } from "@mediapipe/face_mesh/";
    import { FACES as indices, UVS as texCoords } from "./geometry.js";

    //html elements
    let canvas, videoElement, container, main, fpsCounter;
    let margin = 10;

    let scene, renderer, clock, threeCamera;
    let faceLandmarks = new THREE.Group();
    let faceMesh;
    let width, height;
    let lastVideoTime = 0;
    let videoProcessed = true;
    let faceMesh3D, faceMeshRefined;

    let load = false;

    let fps = 0;
    const projectZDiff = 0.01;
    let geometryTransform = {
        zA: 0,
        zB: 0,
        position: null,
        rotation: null,
        scale: null,
        matrix: null,
    };

    const cameraConfig = {
        FOV: 63,
        near: 1,
        far: 1000,
    };

    async function sendVideo() {
        //send will return after associate onresult is returned
        await faceMesh3D.send({ image: videoElement });
        //console.log("3D Send: ", clock.getElapsedTime());
        await faceMeshRefined.send({ image: videoElement });
        //console.log("Refine Send: ", clock.getElapsedTime());

        return;
    }

    async function setupMediaPipe() {
        let faceMesh3D = new FaceMesh({
            locateFile: (file) => {
                return `./face_mesh/${file}`;
            },
        });
        faceMesh3D.setOptions({
            maxNumFaces: 1,
            refineLandmarks: false,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
            enableFaceGeometry: true,
            selfieMode: false,
        });

        let faceMeshRefined = new FaceMesh({
            locateFile: (file) => {
                return `./face_mesh/${file}`;
            },
        });
        faceMeshRefined.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
            enableFaceGeometry: false,
            selfieMode: false,
        });

        const constraints = {
            audio: false,
            video: { width: 640, height: 480 },
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;

        return [faceMesh3D, faceMeshRefined];
    }

    function init() {
        //set up scene
        scene = new THREE.Scene();
        clock = new THREE.Clock();
        //set up renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        //set up camera
        threeCamera = new THREE.PerspectiveCamera(
            cameraConfig.FOV,
            width / height,
            cameraConfig.near,
            cameraConfig.far
        );

        //add lights
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // directionalLight.position.set(1, 0.15, -1);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        //add landmark spheres
        let points = [];

        for (let i = 0; i < 478; i++) {
            const geometry = new THREE.SphereGeometry(0.15, 6, 3);
            const sphere = new THREE.Mesh(
                geometry,
                new THREE.MeshBasicMaterial({
                    color: new THREE.Color(0xffffff),
                })
            );
            faceLandmarks.add(sphere);
            points.push(new THREE.Vector3(0, 0, 0));
        }
        scene.add(faceLandmarks);
        //add mesh
        let buffergeometry = new THREE.BufferGeometry().setFromPoints(points);
        buffergeometry.setIndex(indices);
        let bufferMaterial = new THREE.MeshBasicMaterial({
            opacity: 0.3,
            transparent: true,
            wireframe: true,
            color: new THREE.Color(0x68d2e8),
        });
        faceMesh = new THREE.Mesh(buffergeometry, bufferMaterial);
        scene.add(faceMesh);
    }

    function videoFrame() {
        requestAnimationFrame(videoFrame);
        if (
            videoElement &&
            !videoElement.paused &&
            videoElement.currentTime !== lastVideoTime &&
            videoProcessed
        ) {
            videoProcessed = false;
            sendVideo().then(() => {
                videoProcessed = true;
            });
        }
    }

    function flattenMatrix(m) {
        let mArr = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                mArr.push(m[j][i]);
            }
        }
        return mArr;
    }

    function onResults(results) {
        //console.log("3D result: ", clock.getElapsedTime());
        fps = Math.round(1 / clock.getDelta());
        fps = fps == Infinity ? 0 : fps;
        //geometry result
        if (
            results.multiFaceGeometry.length &&
            results.multiFaceLandmarks.length
        ) {
            //get geometry transform matrix
            let matrixData =
                results.multiFaceGeometry[0].getPoseTransformMatrix();
            let mArr = flattenMatrix(matrixDataToMatrix(matrixData));
            const transformMatrix = new THREE.Matrix4().fromArray(mArr);

            //get local vertices position and 2D projection position
            let landmarks2D = results.multiFaceLandmarks[0];
            let v = results.multiFaceGeometry[0]
                .getMesh()
                .getVertexBufferList();
            let vCount = v.length / 5;

            let aSum = [];
            let bSum = [];
            for (let i = 0; i < vCount; i++) {
                //calculate vertex world position
                let vPos = new THREE.Vector3(
                    v[5 * i],
                    v[5 * i + 1],
                    v[5 * i + 2]
                );
                let vPosNext = new THREE.Vector3(
                    v[(5 * (i + 1)) % vCount],
                    v[((5 * (i + 1)) % vCount) + 1],
                    v[((5 * (i + 1)) % vCount) + 2]
                );
                vPos.applyMatrix4(transformMatrix);
                vPosNext.applyMatrix4(transformMatrix);

                //calculate linear transform y = ax + b between projection and world position
                let diff = landmarks2D[(i + 1) % vCount].z - landmarks2D[i].z;

                if (Math.abs(diff) > projectZDiff) {
                    let a =
                        (vPosNext.z - vPos.z) /
                        (landmarks2D[(i + 1) % vCount].z - landmarks2D[i].z);
                    let b = vPos.z - landmarks2D[i].z * a;

                    aSum.push(a);
                    bSum.push(b);
                }
            }
            //store to global for refined result
            geometryTransform.zA = aSum.reduce((a, b) => a + b) / aSum.length;
            geometryTransform.zB = bSum.reduce((a, b) => a + b) / bSum.length;
            geometryTransform.position =
                new THREE.Vector3().setFromMatrixPosition(transformMatrix);
            geometryTransform.rotation =
                new THREE.Quaternion().setFromRotationMatrix(transformMatrix);
            geometryTransform.scale = new THREE.Vector3().setFromMatrixScale(
                transformMatrix
            );
            geometryTransform.matrix = transformMatrix;
        }
    }

    function onResultsRefined(results) {
        //console.log("Refine result: ", clock.getElapsedTime());
        let iMatrix = geometryTransform.matrix.clone().invert();
        if (results.multiFaceLandmarks.length) {
            results.multiFaceLandmarks[0].forEach((landmark, i) => {
                //get point world position
                let z =
                    landmark.z * geometryTransform.zA + geometryTransform.zB;
                let x =
                    (((0.5 - landmark.x) *
                        (Math.tan((cameraConfig.FOV / 2 / 180) * Math.PI) *
                            2)) /
                        height) *
                    width *
                    z;
                let y =
                    (landmark.y - 0.5) *
                    (Math.tan((cameraConfig.FOV / 2 / 180) * Math.PI) * 2) *
                    z;

                faceLandmarks.children[i].position.set(x, y, z);

                //get local position
                let localPos = new THREE.Vector3(x, y, z).applyMatrix4(iMatrix);
                faceMesh.geometry.attributes.position.setXYZ(
                    i,
                    localPos.x,
                    localPos.y,
                    localPos.z
                );
                faceMesh.geometry.attributes.position.needsUpdate = true;
            });
            faceMesh.rotation.setFromRotationMatrix(geometryTransform.matrix);
            faceMesh.position.setFromMatrixPosition(geometryTransform.matrix);
            faceMesh.scale.setFromMatrixScale(geometryTransform.matrix);
        }

        load = true;
        renderer.render(scene, threeCamera);
    }

    window.addEventListener("resize", function resizeCanvas() {
        if (
            main.clientWidth / (main.clientHeight - fpsCounter.clientHeight) >
            4 / 3
        ) {
            height = Math.min(
                main.clientHeight - fpsCounter.clientHeight - margin * 2,
                480
            );
            width = (height / 3) * 4;
        } else {
            width = Math.min(main.clientWidth - margin * 2, 640);
            height = (width / 4) * 3;
        }
        threeCamera.aspect = width / height;
        threeCamera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    onMount(() => {
        if (
            main.clientWidth / (main.clientHeight - fpsCounter.clientHeight) >
            4 / 3
        ) {
            height = Math.min(
                main.clientHeight - fpsCounter.clientHeight - margin * 2,
                480
            );
            width = (height / 3) * 4;
        } else {
            width = Math.min(main.clientWidth - margin * 2, 640);
            height = (width / 4) * 3;
        }

        setupMediaPipe().then((faceMesh) => {
            [faceMesh3D, faceMeshRefined] = faceMesh;
            init();
            videoFrame();
            //use the same call back cuz
            faceMesh3D.onResults(onResults);
            faceMeshRefined.onResults(onResultsRefined);
        });
    });
</script>

<main bind:this={main}>
    <div
        bind:this={container}
        style="width:{width}px; height:{height}px; margin:{margin}px;"
        class="container"
    >
        <video
            bind:this={videoElement}
            style="width:{width}px; height:{height}px;"
            class="input-video"
            autoplay
            playsinline
            muted
        />
        <canvas bind:this={canvas} class="three-canvas" />
        {#if !load}
            <Loading />
        {/if}
    </div>

    <h3 bind:this={fpsCounter} class="fps">FPS: {fps}</h3>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        position: relative;

        overflow: hidden;
        border-style: solid;
        border-color: #68d2e8;
        border-width: 5px;
        border-radius: 10px;
    }

    .input-video,
    .three-canvas,
    Loading {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .three-canvas {
        z-index: 10;
    }

    Loading {
        z-index: 20;
    }

    .fps {
        margin: 0;
    }
</style>
