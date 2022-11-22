import * as THREE from 'https://cdn.skypack.dev/three@v0.128';
import { OBJLoader } from 'https://cdn.skypack.dev/three@v0.128/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'https://cdn.skypack.dev/three@v0.128/examples/jsm/loaders/MTLLoader.js'
import { OrbitControls } from 'https://cdn.skypack.dev/three@v0.128/examples/jsm/controls/OrbitControls.js'
import { POSITION as positions } from "./position.js";
import { FACES as indices, UVS as texCoords } from "./geometry.js";
import ProjectedMaterial, { project } from './ProjectedMaterial.js'

//html elements
const videoElement = document.querySelector('.input_video');
const canvasElement = document.querySelector('.output_canvas');
const canvasCtx = canvasElement.getContext('2d');
const threeCanvasElement = document.querySelector('.three_canvas')

//mediapipe 3d
const faceMesh3D = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }
});

const faceMeshRefine = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }
});



let camera3D
let width = 0;
let height = 0;

//three js components
let dev = false
//constants
const FOV = 63
//basic scene component
let scene, threeCamera, renderer, controls
//fov magic

//landmarks
let spheres = []
let faceLandmarks = new THREE.Group()
let mesh
let baseNode, topNode, bottomNode
let refineSpheres = []
let refineLandmarks = new THREE.Group()
let clock

function init () {
    //set up scene
    scene = new THREE.Scene()
    clock = new THREE.Clock()
    //set up renderer
    renderer = new THREE.WebGLRenderer({
        canvas: threeCanvasElement,
        antialias: true,
        alpha: true
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)

    //set up camera
    threeCamera = new THREE.PerspectiveCamera(FOV, width / height, 1, 10000);

    //development mode
    if (dev) {
        //set up orbit control
        controls = new OrbitControls(threeCamera, renderer.domElement);
        controls.update()

        //set up grid helper
        const size = 10;
        const divisions = 10;
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);
    }
    threeCamera.position.set(0, 0, 0)

    //add lights
    const directionalLight0 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight0.position.set(1, 0.15, -1)

    //add landmark spheres
    let points = []

    for (let i = 0; i < 468; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 12, 6);

        const material = new THREE.MeshStandardMaterial({ color: 0x000000, opacity: 0.0, transparent: true })
        const sphere = new THREE.Mesh(geometry, material)
        faceLandmarks.add(sphere)
        spheres.push(sphere)
        points.push(new THREE.Vector3(0, 0, 0))


        let refineSphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }))
        refineSpheres.push(refineSphere)
        refineLandmarks.add(refineSphere)
    }
    scene.add(refineLandmarks)
    //scene.add(faceLandmarks)

    let buffergeometry = new THREE.BufferGeometry().setFromPoints(points);
    buffergeometry.setIndex(indices)
    let bufferMaterial = new THREE.MeshNormalMaterial({ color: new THREE.Color(0xffffff), opacity: 0.9, transparent: true, flatShading: true })
    mesh = new THREE.Mesh(buffergeometry, bufferMaterial);
    scene.add(mesh);

    //video texture
    //videoTexture = new THREE.VideoTexture(videoElement);
}

let refineResults
function onResultsRefine (results) {

    if (results.multiFaceLandmarks) {
        refineResults = results.multiFaceLandmarks[0]
    }
}

let count = 0
function onResults (results) {
    //console.log(1 / clock.getDelta())
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, width, height);
    canvasCtx.drawImage(
        results.image, 0, 0, width, height);

    if (results.multiFaceGeometry.length && results.multiFaceLandmarks.length) {
        // for (const landmarks of results.multiFaceLandmarks) {
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
        //         { color: '#C0C0C070', lineWidth: 1 });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, { color: '#E0E0E0' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: '#E0E0E0' });
        // }

        let transformMatrix = results.multiFaceGeometry[0].getPoseTransformMatrix()
        let m = matrixDataToMatrix(transformMatrix)
        let mArr = []
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                mArr.push(m[j][i])
            }
        }

        const matrix = new THREE.Matrix4().fromArray(mArr)
        let v = results.multiFaceGeometry[0].getMesh().getVertexBufferList()

        for (let i = 0; i < v.length / 5; i++) {
            spheres[i].position.set(v[5 * i], v[5 * i + 1], v[5 * i + 2])
        }


        faceLandmarks.rotation.setFromRotationMatrix(matrix)
        faceLandmarks.position.setFromMatrixPosition(matrix)
        faceLandmarks.scale.setFromMatrixScale(matrix)
        let landmarks2D = results.multiFaceLandmarks[0]
        let aArr = []
        let bArr = []
        for (let i = 0; i < spheres.length; i++) {
            let v = new THREE.Vector3()
            spheres[i].getWorldPosition(v)
            let v1 = new THREE.Vector3()
            spheres[(i + 1) % spheres.length].getWorldPosition(v1)

            let diff = landmarks2D[(i + 1) % spheres.length].z - landmarks2D[i].z
            if (diff > 0.01) {
                let a = (v1.z - v.z) / (landmarks2D[(i + 1) % spheres.length].z - landmarks2D[i].z)
                let b = v.z - landmarks2D[i].z * a

                aArr.push(a)
                bArr.push(b)
            }
        }

        let iMatrix = matrix.clone().invert()
        const average = array => array.reduce((a, b) => a + b) / array.length;
        if (aArr.length && bArr.length && refineResults) {
            let a = average(aArr)
            let b = average(bArr)
            for (let i = 0; i < spheres.length; i++) {
                let z = refineResults[i].z * a + b
                let x = (0.5 - refineResults[i].x) * (Math.tan(FOV / 2 / 180 * Math.PI) * 2) / height * width * z
                let y = (refineResults[i].y - 0.5) * (Math.tan(FOV / 2 / 180 * Math.PI) * 2) * z
                refineSpheres[i].position.set(x, y, z)
                refineSpheres[i].applyMatrix4(iMatrix)
                mesh.geometry.attributes.position.setXYZ(i, refineSpheres[i].position.x, refineSpheres[i].position.y, refineSpheres[i].position.z)
                mesh.geometry.attributes.position.needsUpdate = true;
                mesh.geometry.computeVertexNormals()
            }
            refineLandmarks.rotation.setFromRotationMatrix(matrix)
            refineLandmarks.position.setFromMatrixPosition(matrix)
            refineLandmarks.scale.setFromMatrixScale(matrix)
            mesh.rotation.setFromRotationMatrix(matrix)
            mesh.position.setFromMatrixPosition(matrix)
            mesh.scale.setFromMatrixScale(matrix)
        }

        // if (count < 48) {
        //     refineLandmarks.rotateY(Math.PI / 24 * count)
        //     mesh.rotateY(Math.PI / 24 * count)
        //     count++
        // }
    }

    if (dev) {
        controls.update()
    }
    renderer.render(scene, threeCamera)
    canvasCtx.restore();
}

function setUpMediaPipe () {
    faceMesh3D.setOptions({
        maxNumFaces: 1,
        refineLandmarks: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        enableFaceGeometry: true,
        selfieMode: true
    });

    faceMeshRefine.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        enableFaceGeometry: false,
        selfieMode: true
    });

    camera3D = new Camera(videoElement, {
        onFrame: async () => {
            await faceMesh3D.send({ image: videoElement });
            await faceMeshRefine.send({ image: videoElement });
        },
    });
    camera3D.start()


    const aspect = camera3D.h.height / camera3D.h.width;
    if (window.innerWidth > window.innerHeight) {
        width = window.innerWidth / 2;
        height = width * aspect;
    } else {
        height = window.innerHeight / 2;
        width = height / aspect;
    }
    canvasElement.width = width
    canvasElement.height = height
    threeCanvasElement.width = width
    threeCanvasElement.width = height
}


function resizeCanvas () {
    const aspect = camera3D.h.height / camera3D.h.width;
    if (window.innerWidth > window.innerHeight) {
        width = window.innerWidth / 2;
        height = width * aspect;
    } else {
        height = window.innerHeight / 2;
        width = height / aspect;
    }
    canvasElement.width = width
    canvasElement.height = height
    threeCanvasElement.width = width
    threeCanvasElement.width = height
    threeCamera.aspect = width / height
    threeCamera.updateProjectionMatrix()
    renderer.setSize(width, height)
}

window.addEventListener('resize', resizeCanvas);

setUpMediaPipe()
init()
faceMesh3D.onResults(onResults);
faceMeshRefine.onResults(onResultsRefine);
