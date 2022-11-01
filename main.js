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

//mediapipe
const faceMesh = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }
});
let camera;
let width = 0;
let height = 0;

//three js components
let dev = true
//constants
const FOV = 15
const landmarkScaleConstant = 24
const positionScale = 0.5
const samplePoint = [10, 454, 234]
//basic scene component
let scene, threeCamera, renderer, controls
//fov magic
let filmWidth = 0
let filmHeight = 0
let landmarkScale
let faceVerticalLength
let faceFilmRatio = 0
let focalLength = 0
//transform matrix for face
let invertBaseTransformMatrix = new THREE.Matrix4();
//landmarks
let spheres = []
let line
let baseNode, topNode, bottomNode
//video as a three js texture
let videoTexture
let projectedObject
let mask1, mask2
function init () {
    //set three js environment scale
    landmarkScale = landmarkScaleConstant / height

    //calculate reference distance
    let t = new THREE.Vector3(positions[samplePoint[1]][0], positions[samplePoint[1]][1], positions[samplePoint[1]][2])
    let b = new THREE.Vector3(positions[samplePoint[2]][0], positions[samplePoint[2]][1], positions[samplePoint[2]][2])
    faceVerticalLength = t.distanceTo(b) * positionScale

    //set up scene
    scene = new THREE.Scene()

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
    threeCamera = new THREE.PerspectiveCamera(FOV, width / height, 0.01, 1000);
    filmWidth = threeCamera.getFilmWidth()
    filmHeight = threeCamera.getFilmHeight()
    focalLength = threeCamera.getFocalLength()
    faceFilmRatio = faceVerticalLength / filmHeight

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
    threeCamera.position.set(0, 0, focalLength)

    //add lights
    const directionalLight0 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight0.position.set(1, 0.15, -1)

    //add landmark spheres
    let points = []
    for (let i = 0; i < 478; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 12, 6);
        let color = new THREE.Color("rgb(0, 0, 0)")
        const material = new THREE.MeshBasicMaterial({ color: color })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)
        spheres.push(sphere)
        points.push(new THREE.Vector3(0, 0, 0))
    }

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    lineGeometry.setIndex(indices)
    let lineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
    lineMaterial.wireframe = true
    line = new THREE.Mesh(lineGeometry, lineMaterial);
    scene.add(line);

    //use the nose sphere as base node for all 3d model
    baseNode = spheres[4]
    topNode = spheres[10]
    bottomNode = spheres[152]

    //video texture
    videoTexture = new THREE.VideoTexture(videoElement);

    // instantiate a loader
    // const manager = new THREE.LoadingManager();
    // manager.onStart = function (url, itemsLoaded, itemsTotal) {
    //     console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    // };
    // manager.onLoad = function () {
    //     console.log('Loading complete!');
    // };
    // manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    //     console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    // };
    // manager.onError = function (url) {
    //     console.log('There was an error loading ' + url);
    // };

    // const objLoader = new OBJLoader(manager);
    // objLoader.load('', function (object) {

    // })

    // const textureLoader = new THREE.TextureLoader(manager);
    // textureLoader.load(
    //     '',
    //     function (texture) {
    //     }
    // )


    //calculate homogeneous transform matrix from the obj model
    let p0 = new THREE.Vector3(positions[samplePoint[0]][0] * positionScale, positions[samplePoint[0]][1] * positionScale, positions[samplePoint[0]][2] * positionScale)
    let p1 = new THREE.Vector3(positions[samplePoint[1]][0] * positionScale, positions[samplePoint[1]][1] * positionScale, positions[samplePoint[1]][2] * positionScale)
    let p2 = new THREE.Vector3(positions[samplePoint[2]][0] * positionScale, positions[samplePoint[2]][1] * positionScale, positions[samplePoint[2]][2] * positionScale)

    invertBaseTransformMatrix = new THREE.Matrix4()
    const x = p1.clone().sub(p0).normalize()
    const y = p2.clone().sub(p0).normalize()
    const z = new THREE.Vector3().crossVectors(x, y).normalize()
    const y2 = new THREE.Vector3().crossVectors(x, z).normalize()
    const z2 = new THREE.Vector3().crossVectors(x, y2).normalize()

    invertBaseTransformMatrix.makeBasis(x, y2, z2)
    invertBaseTransformMatrix.setPosition(p0.x, p0.y, p0.z)
    invertBaseTransformMatrix.invert()
}

function transformLandmarks (landmark) {
    let obj = {}
    obj.x = ((landmark.x - 0.5) * width) * landmarkScale
    obj.y = ((-landmark.y + 0.5) * height) * landmarkScale
    obj.z = -landmark.z * width * landmarkScale
    return obj
}

function getMatrix (landmarks) {
    //calculate homogeneous transform matrix from the obj model
    let p0 = new THREE.Vector3(landmarks[samplePoint[0]].x, landmarks[samplePoint[0]].y, landmarks[samplePoint[0]].z)
    let p1 = new THREE.Vector3(landmarks[samplePoint[1]].x, landmarks[samplePoint[1]].y, landmarks[samplePoint[1]].z)
    let p2 = new THREE.Vector3(landmarks[samplePoint[2]].x, landmarks[samplePoint[2]].y, landmarks[samplePoint[2]].z)
    const matrix = new THREE.Matrix4();
    const x = p1.clone().sub(p0).normalize()
    const y = p2.clone().sub(p0).normalize()
    const z = new THREE.Vector3().crossVectors(x, y).normalize()
    const y2 = new THREE.Vector3().crossVectors(x, z).normalize()
    const z2 = new THREE.Vector3().crossVectors(x, y2).normalize()
    matrix.makeBasis(x, y2, z2);
    matrix.setPosition(p0.x, p0.y, p0.z)

    const result = new THREE.Matrix4()
    result.multiplyMatrices(matrix, invertBaseTransformMatrix)

    return result
}

function onResults (results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, width, height);
    canvasCtx.drawImage(
        results.image, 0, 0, width, height);
    if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
            //console.log(FACEMESH_TESSELATION)
            // drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
            //     { color: '#C0C0C070', lineWidth: 1 });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, { color: '#FF3030' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, { color: '#FF3030' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, { color: '#FF3030' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, { color: '#30FF30' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, { color: '#30FF30' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, { color: '#30FF30' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, { color: '#E0E0E0' });
            // drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: '#E0E0E0' });

            const top = transformLandmarks(landmarks[samplePoint[1]])
            const topLandmark = new THREE.Vector3(top.x, top.y, top.z)
            const bottom = transformLandmarks(landmarks[samplePoint[2]])
            const bottomLandmark = new THREE.Vector3(bottom.x, bottom.y, bottom.z)
            const dis = topLandmark.distanceTo(bottomLandmark);
            const scale = faceVerticalLength / dis
            const deltaZ = focalLength - (scale * focalLength)

            let newLandmarks = []
            let mask1Vertices = []
            let mask2Vertices = []
            landmarks.forEach((mark, i) => {
                let l = transformLandmarks(mark)
                let tempMark = { x: l.x * scale, y: l.y * scale, z: l.z + deltaZ }
                newLandmarks.push(tempMark)
                mask1Vertices.push(l.x * scale)
                mask1Vertices.push(l.y * scale)
                mask1Vertices.push(l.z + deltaZ)
                spheres[i].position.set(tempMark.x, tempMark.y, tempMark.z)
                line.geometry.attributes.position.setXYZ(i, spheres[i].position.x, spheres[i].position.y, spheres[i].position.z)
            })

            line.geometry.attributes.position.needsUpdate = true;

            let m = getMatrix(newLandmarks)
            let q = new THREE.Quaternion()
            q.setFromRotationMatrix(m)
            baseNode.quaternion.set(q.x, q.y, q.z, q.w)
        }
    }
    //project video texture
    //project(projectedObject)

    if (dev) {
        controls.update()
    }
    renderer.render(scene, threeCamera)
    canvasCtx.restore();
}

function setUpMediaPipe () {
    faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    camera = new Camera(videoElement, {
        onFrame: async () => {
            await faceMesh.send({ image: videoElement });
        },
    });
    camera.start()

    const aspect = camera.h.height / camera.h.width;
    if (window.innerWidth > window.innerHeight) {
        height = window.innerHeight;
        width = height / aspect;
    } else {
        width = window.innerWidth;
        height = width * aspect;
    }
    canvasElement.width = width
    canvasElement.height = height
    threeCanvasElement.width = width
    threeCanvasElement.width = height
}


function resizeCanvas () {
    const aspect = camera.h.height / camera.h.width;
    if (window.innerWidth > window.innerHeight) {
        height = window.innerHeight;
        width = height / aspect;
    } else {
        width = window.innerWidth;
        height = width * aspect;
    }
    canvasElement.width = width
    canvasElement.height = height
    threeCanvasElement.width = width
    threeCanvasElement.width = height
    threeCamera.aspect = width / height
    threeCamera.updateProjectionMatrix()
    renderer.setSize(width, height)

    landmarkScale = landmarkScaleConstant / height
}

window.addEventListener('resize', resizeCanvas);

setUpMediaPipe()
init()
faceMesh.onResults(onResults);