<script>
    import Loading from "./Loading.svelte";
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { FaceMesh, matrixDataToMatrix } from "@mediapipe/face_mesh/";
    import { FACES as indices, UVS as texCoords } from "../data/geometry";

    //html elements
    let canvas, videoElement, container, main, fpsCounter, videoSelect;
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
        vertices: null,
    };

    const cameraConfig = {
        FOV: 63,
        near: 1,
        far: 1000,
    };

    function flattenMatrix(m) {
        let mArr = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                mArr.push(m[j][i]);
            }
        }
        return mArr;
    }

    function getDevices() {
        // AFAICT in Safari this only gets default devices until gUM is called :/
        return navigator.mediaDevices.enumerateDevices();
    }

    function gotDevices(deviceInfos) {
        window.deviceInfos = deviceInfos; // make available to console
        //console.log("Available input and output devices:", deviceInfos);
        for (const deviceInfo of deviceInfos) {
            const option = document.createElement("option");
            option.value = deviceInfo.deviceId;
            if (deviceInfo.kind === "videoinput") {
                option.text =
                    deviceInfo.label || `Camera ${videoSelect.length + 1}`;
                videoSelect.appendChild(option);
            }
        }
    }

    function getStream() {
        if (window.stream) {
            window.stream.getTracks().forEach((track) => {
                track.stop();
            });
        }
        const videoSource = videoSelect.value;

        const constraints = {
            video: {
                deviceId: videoSource ? { exact: videoSource } : undefined,
                width: 640,
                height: 480,
                maxWidth: 640,
                maxHeight: 640,
            },
        };

        return navigator.mediaDevices.getUserMedia(constraints);
    }

    function gotStream(stream) {
        window.stream = stream; // make stream available to console
        videoSelect.selectedIndex = [...videoSelect.options].findIndex(
            (option) => option.text === stream.getVideoTracks()[0].label
        );

        videoElement.srcObject = stream;

        return (
            stream.getVideoTracks()[0].getSettings().width /
            stream.getVideoTracks()[0].getSettings().height
        );
    }

    function setupCamera() {
        return new Promise((resolve, reject) => {
            //change source when select changes
            videoSelect.addEventListener("change", () => {
                getStream().then((stream) => {
                    //change dimensions if source dimention changes
                    let aspect = gotStream(stream);
                    setupDimention(aspect);
                });
            });
            //set constraints and get stream
            getStream().then((stream) => {
                //get device list
                getDevices().then(gotDevices);
                //set video amd get settings
                let aspect = gotStream(stream);
                resolve(aspect);
            });
        });
    }

    function setupThree() {
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

        return [faceMesh3D, faceMeshRefined];
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
        } else {
        }
    }

    function onResultsRefined(results) {
        //console.log("Refine result: ", clock.getElapsedTime());
        if (geometryTransform.matrix != null) {
            let iMatrix = geometryTransform.matrix.clone().invert();
            geometryTransform.vertices = [];
            if (results.multiFaceLandmarks.length) {
                faceLandmarks.visible = true;
                faceMesh.visible = true;
                results.multiFaceLandmarks[0].forEach((landmark, i) => {
                    //get point world position
                    let z =
                        landmark.z * geometryTransform.zA +
                        geometryTransform.zB;
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
                    let localPos = new THREE.Vector3(x, y, z).applyMatrix4(
                        iMatrix
                    );

                    geometryTransform.vertices.push(
                        localPos.x,
                        localPos.y,
                        localPos.z
                    );

                    faceMesh.geometry.attributes.position.setXYZ(
                        i,
                        localPos.x,
                        localPos.y,
                        localPos.z
                    );
                    faceMesh.geometry.attributes.position.needsUpdate = true;
                });
                faceMesh.rotation.setFromRotationMatrix(
                    geometryTransform.matrix
                );
                faceMesh.position.setFromMatrixPosition(
                    geometryTransform.matrix
                );
                faceMesh.scale.setFromMatrixScale(geometryTransform.matrix);
            } else {
                faceLandmarks.visible = false;
                faceMesh.visible = false;
            }

            load = true;
            renderer.render(scene, threeCamera);
        } else {
            faceLandmarks.visible = false;
            faceMesh.visible = false;
        }
    }

    function setupDimention(aspect) {
        let containerAspect = container.clientWidth / container.clientHeight;
        if (aspect > containerAspect) {
            width = container.clientWidth;
            height = width / aspect;
        } else {
            height = container.clientHeight;
            width = height * aspect;
        }
    }

    onMount(() => {
        //setupDimention();
        setupMediaPipe().then((faceMesh) => {
            [faceMesh3D, faceMeshRefined] = faceMesh;
            setupCamera().then((videoAspect) => {
                setupDimention(videoAspect);
                setupThree();
            });

            videoFrame();
            //use the same call back cuz
            faceMesh3D.onResults(onResults);
            faceMeshRefined.onResults(onResultsRefined);
        });

        window.addEventListener("resize", function resizeCanvas() {
            if (videoElement.srcObject) {
                let aspect =
                    videoElement.srcObject.getVideoTracks()[0].getSettings()
                        .width /
                    videoElement.srcObject.getVideoTracks()[0].getSettings()
                        .height;
                setupDimention(aspect);
                threeCamera.aspect = width / height;
                threeCamera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }
        });
    });

    export function calibrate() {
        return geometryTransform;
    }
</script>

<main bind:this={main}>
    <div class="info">
        <div class="select">
            <label for="videoSource"><h4>Source:&nbsp;</h4></label><select
                bind:this={videoSelect}
            />
        </div>
        <h4 bind:this={fpsCounter} class="fps">FPS: {fps}</h4>
    </div>
    <div bind:this={container} class="container">
        <video
            bind:this={videoElement}
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
</main>

<style>
    main {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        position: relative;

        border-style: solid;
        border-color: #68d2e8;
        border-width: 5px;
        border-radius: 10px;

        width: auto;
        height: 100%;
        aspect-ratio: 1/1;
    }

    .input-video {
        position: fixed;
    }

    Loading {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .three-canvas,
    .input-video {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .three-canvas {
        z-index: 10;
    }

    Loading {
        z-index: 20;
    }

    .fps {
        margin: 0;
        width: 20%;
    }

    .select {
        position: relative;
        z-index: 40;
        display: flex;
        background-color: transparent;
        align-items: center;
    }

    .info {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

    @media (min-width: 1024px) {
        .container {
            width: 80%;
            height: auto;
            aspect-ratio: 1/1;
        }
    }
</style>
