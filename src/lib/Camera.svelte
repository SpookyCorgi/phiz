<script>
    import Loading from "./Loading.svelte";
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { FaceMesh, matrixDataToMatrix } from "@mediapipe/face_mesh/";
    import { FACES as indices, UVS as texCoords } from "../data/geometry";
    import { Homography } from "homography";
    import { data } from "../data/blendshapes";

    //html elements
    let canvas,
        videoElement,
        videoContainer,
        main,
        fpsCounter,
        videoSelect,
        geometryElement,
        geometryContainer,
        uvTexture,
        textureContainer;

    let renderer, clock, videoScene, geometryScene, controls;
    let faceLandmarks = new THREE.Group();
    let faceMesh;
    let width, height;
    let lastVideoTime = 0;
    let videoProcessed = true;
    let faceMesh3D, faceMeshRefined;
    let faceResults = null;

    let load = false;

    let myHomography;

    const verticesCount = 468;

    let fps = 0;
    const projectZDiff = 0.01;

    let faceGeometry = {
        position: null,
        rotation: null,
        scale: null,
        matrix: null,
        vertices: null,
        localVertices: null,
        texture: null,
    };

    const cameraConfig = {
        FOV: 70,
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

    function setupThree(aspect) {
        //set up scene
        clock = new THREE.Clock();
        //set up renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

        //set up camera scene
        videoScene = new THREE.Scene();
        const videoCamera = new THREE.PerspectiveCamera(
            cameraConfig.FOV,
            aspect,
            cameraConfig.near,
            cameraConfig.far
        );
        videoScene.userData.camera = videoCamera;

        const videoLight = new THREE.AmbientLight(0xffffff, 1);
        videoScene.add(videoLight);

        //set up geometry scene
        geometryScene = new THREE.Scene();
        const geometryCamera = new THREE.PerspectiveCamera(
            cameraConfig.FOV,
            aspect,
            cameraConfig.near,
            cameraConfig.far
        );
        geometryScene.userData.camera = geometryCamera;
        const geometryLight = new THREE.DirectionalLight(0xffffff, 1);
        geometryLight.position.set(0, 1, 1);
        geometryScene.add(geometryLight);
        const gridHelperXZ = new THREE.GridHelper(50, 10);
        gridHelperXZ.position.set(0, -20, -30);
        const gridHelperYZ = new THREE.GridHelper(50, 10);
        gridHelperYZ.rotateX(Math.PI / 2);
        gridHelperYZ.position.set(0, 5, -55);
        const gridHelperXY = new THREE.GridHelper(50, 10);
        gridHelperXY.rotateZ(Math.PI / 2);
        gridHelperXY.position.set(-25, 5, -30);

        geometryScene.add(gridHelperXZ, gridHelperYZ, gridHelperXY);

        geometryCamera.position.set(0, 0, 0);
        controls = new OrbitControls(geometryCamera, renderer.domElement);
        controls.target.set(0, 0, -30);
        controls.update();

        //add landmark spheres
        let points = [];
        for (let i = 0; i < verticesCount; i++) {
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
        videoScene.add(faceLandmarks);

        //add mesh
        let buffergeometry = new THREE.BufferGeometry().setFromPoints(points);
        buffergeometry.setIndex(indices);
        let uv = [];
        texCoords.forEach((texCoord) => {
            uv.push(texCoord[0], 1 - texCoord[1]);
        });
        buffergeometry.setAttribute(
            "uv",
            new THREE.BufferAttribute(new Float32Array(uv), 2)
        );

        let bufferMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0x4db6ac),
        });
        faceMesh = new THREE.Mesh(buffergeometry, bufferMaterial);
        geometryScene.add(faceMesh);
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
            cameraVerticalFovDegrees: cameraConfig.FOV,
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
            cameraVerticalFovDegrees: cameraConfig.FOV,
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
            let localVertices = results.multiFaceGeometry[0]
                .getMesh()
                .getVertexBufferList();
            faceGeometry.localVertices = [];
            for (let i = 0; i < verticesCount; i++) {
                let v = new THREE.Vector3(
                    localVertices[i * 5],
                    localVertices[i * 5 + 1],
                    localVertices[i * 5 + 2]
                );
                v.applyMatrix4(transformMatrix);
                faceGeometry.localVertices.push(v);
            }

            faceGeometry.position = new THREE.Vector3().setFromMatrixPosition(
                transformMatrix
            );
            faceGeometry.rotation =
                new THREE.Quaternion().setFromRotationMatrix(transformMatrix);
            faceGeometry.scale = new THREE.Vector3().setFromMatrixScale(
                transformMatrix
            );
            faceGeometry.matrix = transformMatrix;
        } else {
        }
    }

    function onResultsRefined(results) {
        //console.log("Refine result: ", clock.getElapsedTime());
        if (faceGeometry.matrix != null) {
            let iMatrix = faceGeometry.matrix.clone().invert();
            faceGeometry.vertices = [];

            if (results.multiFaceLandmarks.length) {
                faceLandmarks.visible = true;
                faceMesh.visible = true;
                let landmarks = results.multiFaceLandmarks[0];
                faceResults = results;
                for (let i = 0; i < verticesCount; i++) {
                    let z = faceGeometry.localVertices[i].z;
                    let x =
                        (((0.5 - landmarks[i].x) *
                            (Math.tan((cameraConfig.FOV / 2 / 180) * Math.PI) *
                                2)) /
                            height) *
                        width *
                        z;
                    let y =
                        (landmarks[i].y - 0.5) *
                        (Math.tan((cameraConfig.FOV / 2 / 180) * Math.PI) * 2) *
                        z;
                    faceLandmarks.children[i].position.set(x, y, z);

                    //get local position
                    let localPos = new THREE.Vector3(x, y, z);
                    localPos.applyMatrix4(iMatrix);

                    faceGeometry.vertices.push(
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
                }
                faceMesh.geometry.attributes.position.needsUpdate = true;
                faceMesh.rotation.setFromRotationMatrix(faceGeometry.matrix);
                faceMesh.position.setFromMatrixPosition(faceGeometry.matrix);
                faceMesh.scale.setFromMatrixScale(faceGeometry.matrix);
                if (!load) {
                    faceMesh.geometry.computeVertexNormals();
                }
            } else {
                faceLandmarks.visible = false;
                faceMesh.visible = false;
            }

            load = true;
            render();
        } else {
            faceLandmarks.visible = false;
            faceMesh.visible = false;
        }
    }

    function render() {
        updateSize();
        renderer.setClearColor(0x000000, 0);
        renderer.setScissorTest(false);
        renderer.clear();

        renderer.setClearColor(0x000000, 0);
        renderer.setScissorTest(true);

        controls.enabled = false;
        renderScene(videoScene, videoElement);

        renderer.setClearColor(0x000000, 1);
        renderer.setScissorTest(true);
        controls.enabled = true;
        controls.update();
        renderScene(geometryScene, geometryElement);
    }

    function renderScene(scene, element) {
        //render video scene
        let rect = element.getBoundingClientRect();
        let rendererRect = renderer.domElement.getBoundingClientRect();
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
    }

    function setupDimention(aspect) {
        let containerAspect =
            videoContainer.clientWidth / videoContainer.clientHeight;
        if (aspect > containerAspect) {
            width = videoContainer.clientWidth;
            height = width / aspect;
        } else {
            height = videoContainer.clientHeight;
            width = height * aspect;
        }

        videoElement.setAttribute("height", height);
        videoElement.setAttribute("width", width);

        let geometryAspect =
            geometryContainer.clientWidth / geometryContainer.clientHeight;

        let geometryHeight, geometryWidth;
        if (aspect > geometryAspect) {
            geometryWidth = geometryContainer.clientWidth;
            geometryHeight = geometryWidth / aspect;
        } else {
            geometryHeight = geometryContainer.clientHeight;
            geometryWidth = geometryHeight * aspect;
        }

        geometryElement.style.width = `${geometryWidth}px`;
        geometryElement.style.height = `${geometryHeight}px`;

        if (textureContainer.clientWidth > textureContainer.clientHeight) {
            uvTexture.style.width = `${textureContainer.clientHeight}px`;
            uvTexture.style.height = `${textureContainer.clientHeight}px`;
        } else {
            uvTexture.style.width = `${textureContainer.clientWidth}px`;
            uvTexture.style.height = `${textureContainer.clientWidth}px`;
        }
    }

    function updateSize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width || canvas.height !== height) {
            renderer.setSize(width, height, false);
        }
    }

    onMount(() => {
        //setupDimention();
        setupMediaPipe().then((faceMesh) => {
            [faceMesh3D, faceMeshRefined] = faceMesh;
            setupCamera().then((videoAspect) => {
                setupDimention(videoAspect);
                setupThree(videoAspect);
            });

            videoFrame();
            //use the same call back cuz
            faceMesh3D.onResults(onResults);
            faceMeshRefined.onResults(onResultsRefined);

            myHomography = new Homography("piecewiseaffine");
        });

        window.addEventListener("resize", function resizeCanvas() {
            if (videoElement.srcObject) {
                let aspect =
                    videoElement.srcObject.getVideoTracks()[0].getSettings()
                        .width /
                    videoElement.srcObject.getVideoTracks()[0].getSettings()
                        .height;
                setupDimention(width / height);
            }
            updateSize();
        });
    });

    export function getFaceGeometry() {
        return faceGeometry;
    }

    export function getUVTexture() {
        if (faceResults && myHomography) {
            let canvas = faceResults.image;
            // let imgData = canvas
            //     .getContext("2d")
            //     .getImageData(0, 0, canvas.width, canvas.height);
            let srcPoints = [];
            for (let i = 0; i < verticesCount; i++) {
                srcPoints.push([
                    faceResults.multiFaceLandmarks[0][i].x,
                    faceResults.multiFaceLandmarks[0][i].y,
                ]);
            }
            let dscPoints = [];
            if (canvas.width > canvas.height) {
                for (let i = 0; i < verticesCount; i++) {
                    dscPoints.push([
                        (texCoords[i][0] / canvas.width) * canvas.height,
                        texCoords[i][1],
                    ]);
                }
            } else {
                for (let i = 0; i < verticesCount; i++) {
                    dscPoints.push([
                        texCoords[i][0],
                        (texCoords[i][1] / canvas.height) * canvas.width,
                    ]);
                }
            }

            myHomography.setImage(canvas);
            // Set the reference points
            myHomography.setSourcePoints(
                srcPoints,
                canvas,
                canvas.width,
                canvas.height,
                true
            );
            myHomography.setDestinyPoints(dscPoints, true);
            // Warp your image
            let result = myHomography.warp();
            let resultTexture = document.createElement("canvas");
            resultTexture.width = canvas.width;
            resultTexture.height = canvas.height;
            resultTexture.getContext("2d").putImageData(result, 0, 0);
            uvTexture.getContext("2d").beginPath();
            var ctx = uvTexture.getContext("2d");
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, uvTexture.width, uvTexture.height);
            if (canvas.width > canvas.height) {
                ctx.drawImage(
                    resultTexture,
                    0,
                    0,
                    canvas.height,
                    canvas.height,
                    0,
                    0,
                    uvTexture.width,
                    uvTexture.height
                );
            } else {
                ctx.drawImage(
                    resultTexture,
                    0,
                    0,
                    canvas.width,
                    canvas.width,
                    0,
                    0,
                    uvTexture.width,
                    uvTexture.height
                );
            }

            faceMesh.material.map = new THREE.CanvasTexture(uvTexture);
            faceMesh.material.color = new THREE.Color(0xffffff);
            faceMesh.material.needsUpdate = true;

            faceGeometry.texture = uvTexture;
        }
    }
</script>

<main bind:this={main}>
    <div class="container">
        <div class="content">
            <div class="info">
                <div class="select">
                    <label for="videoSource"
                        ><h3 class="text-body">Source:&nbsp;</h3></label
                    ><select bind:this={videoSelect} class="select-item" />
                </div>
                <h3 bind:this={fpsCounter} class="fps text-body">
                    FPS: {fps}
                </h3>
            </div>
            <div bind:this={videoContainer} class="videoContainer">
                <video
                    bind:this={videoElement}
                    class="input-video"
                    autoplay
                    playsinline
                    muted
                />
                {#if !load}
                    <Loading />
                {/if}
            </div>
        </div>

        <div class="output">
            <div class="geometry">
                <div class="geometry-container" bind:this={geometryContainer}>
                    <div class="geometry-canvas" bind:this={geometryElement} />
                </div>
            </div>

            <div class="texture">
                <div class="texture-container" bind:this={textureContainer}>
                    <canvas bind:this={uvTexture} class="texture-canvas" />
                </div>
            </div>
        </div>

        <canvas class="three-canvas" bind:this={canvas} />
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
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .content {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        /* border-style: solid;
        border-color: var(--material-color-teal-200);
        border-width: 2px;
        border-radius: 10px; */
        border-radius: 16px;
        padding: 16px;

        background-image: var(--gradient-background);
        box-shadow: var(--shadow-1);
    }

    .videoContainer {
        position: relative;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .output {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 16px;
    }

    .geometry {
        position: relative;
        width: 100%;
        height: 50%;

        padding: 16px;
        border-radius: 16px;

        background-image: var(--gradient-background);
        box-shadow: var(--shadow-1);

        padding: 16px;
    }

    .geometry-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .geometry-canvas {
        width: 100%;
        height: 100%;
    }

    .texture {
        position: relative;

        width: 100%;
        height: 50%;

        padding: 16px;
        border-radius: 16px;

        background-image: var(--gradient-background);
        box-shadow: var(--shadow-1);
    }

    .texture-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .texture-canvas {
        width: 100%;
        height: 100%;
    }

    Loading {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
    }

    .input-video {
        position: absolute;
    }

    .three-canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .fps {
        margin: 0;
    }

    .select {
        position: relative;
        z-index: 40;
        display: flex;
        background-color: transparent;
        align-items: center;
    }

    .select-item {
        width: 100%;
    }

    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 5px;
    }

    @media (min-width: 1024px) and (min-aspect-ratio: 1/1) {
        .content {
            width: 100%;
            height: 50%;
        }
        .output {
            width: 100%;
            height: 50%;
            flex-direction: row;
        }

        .geometry {
            width: 50%;
            height: 100%;
        }
        .texture {
            width: 50%;
            height: 100%;
        }

        .container {
            /* width: auto;
            height: 100%;
            aspect-ratio: 1/1; */
            flex-direction: column;
        }

        .info {
            flex-direction: row;
            align-items: center;
            gap: 216px;
        }
    }
</style>
