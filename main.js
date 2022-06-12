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
let dev = false
//constants
const FOV = 15
const landmarkScaleConstant = 26
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
    const directionalLight0 = new THREE.DirectionalLight(0xaeff00, 1)
    directionalLight0.position.set(1, 0.15, -1)
    const directionalLight1 = new THREE.DirectionalLight(0xff0000, 1)
    directionalLight1.position.set(0.3, -1, -0.05)
    const directionalLight2 = new THREE.DirectionalLight(0x00ffee, 1)
    directionalLight2.position.set(0.05, 1, 1)
    const directionalLight3 = new THREE.DirectionalLight(0xff00ea, 1)
    directionalLight3.position.set(-0.8, 1, 1)
    scene.add(directionalLight0, directionalLight1, directionalLight2, directionalLight3)
    //const helper = new THREE.DirectionalLightHelper(directionalLight3, 5);
    //scene.add(helper);

    //add landmark spheres
    for (let i = 0; i < 478; i++) {
        const geometry = new THREE.SphereGeometry(0.0, 12, 6);
        let color = new THREE.Color("rgb(0, 0, 0)")
        const material = new THREE.MeshBasicMaterial({ color: color })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)
        spheres.push(sphere)
    }
    //use the nose sphere as base node for all 3d model
    baseNode = spheres[4]
    topNode = spheres[10]
    bottomNode = spheres[152]

    //video texture
    videoTexture = new THREE.VideoTexture(videoElement);

    // instantiate a loader
    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
        console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };
    manager.onLoad = function () {
        console.log('Loading complete!');
    };
    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };
    manager.onError = function (url) {
        console.log('There was an error loading ' + url);
    };

    const objLoader = new OBJLoader(manager);
    objLoader.load('assets/models/elf2/elf2.obj', function (object) {
        let elf2 = object.clone()
        //set up position
        elf2.rotateY(Math.PI)
        elf2.scale.set(0.8, 0.8, 0.8)
        elf2.position.set(0, -1 - 0.5, 2 - 2)
        //projected material
        const elf2Material = new ProjectedMaterial({
            // use the scene camera itself
            camera: threeCamera,
            texture: videoTexture,
            color: '#dc72ff',
            opacity: 1.0
        })
        //assign material to the mesh
        elf2.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = elf2Material;
                projectedObject = child
                //project
                project(projectedObject)
            }
        });
        //add object to base node
        baseNode.add(elf2)


        let elf3 = object.clone()
        //set up position
        elf3.rotateY(Math.PI)
        elf3.scale.set(0.8, 0.8, 0.8)
        elf3.position.set(0, -1 - 0.5, 4 - 2)
        //material
        const elf3Material = new THREE.MeshStandardMaterial()
        elf3Material.transparent = true
        elf3Material.opacity = 0.47
        //assign material to the mesh
        elf3.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = elf3Material;
            }
        });
        baseNode.add(elf3)
    });

    objLoader.load('assets/models/ring/ring.obj', function (object) {
        let ring0 = object.clone()
        ring0.scale.set(0.008, 0.008, 0.008)
        ring0.rotation.set(0, -0.15, Math.PI / 2)
        ring0.position.set(-4.3, -2.4 - 0.5, -5 - 2)
        //material
        const ring0Material = new THREE.MeshPhongMaterial()
        ring0Material.emissive.set(new THREE.Color(0xffef07))
        //assign material to the mesh
        ring0.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = ring0Material;
            }
        });
        baseNode.add(ring0)

        let ring1 = object.clone()
        ring1.scale.set(0.008, 0.008, 0.008)
        ring1.rotation.set(0, 0.15, Math.PI / 2)
        ring1.position.set(4.3, -2.4 - 0.5, -5 - 2)
        //assign material to the mesh
        ring1.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = ring0Material;
            }
        });
        baseNode.add(ring1)

        let ring2 = object.clone()
        ring2.scale.set(0.005, 0.005, 0.005)
        ring2.rotation.set(0, Math.PI / 4, Math.PI / 2)
        ring2.position.set(7, 2 - 0.5, -8 - 2)
        //assign material to the mesh
        ring2.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = ring0Material;
            }
        });
        baseNode.add(ring2)

        let ring3 = object.clone()
        ring3.scale.set(0.005, 0.005, 0.005)
        ring3.rotation.set(0, Math.PI / 4 + 0.5, Math.PI / 2)
        ring3.position.set(6.7, 2 - 0.5, -9 - 2)
        //assign material to the mesh
        ring3.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = ring0Material;
            }
        });
        baseNode.add(ring3)

        let ring4 = object.clone()
        ring4.scale.set(0.005, 0.005, 0.005)
        ring4.rotation.set(0, -Math.PI / 4, Math.PI / 2)
        ring4.position.set(-7, 2 - 0.5, -8 - 2)
        //assign material to the mesh
        ring4.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = ring0Material;
            }
        });
        baseNode.add(ring4)
    })

    objLoader.load('assets/models/headgear/headgear.obj', function (object) {
        let headgear = object.clone()
        headgear.rotateY(Math.PI)
        headgear.scale.set(2.9, 2.9, 2.9)
        headgear.position.set(0, -76.5 - 0.5, -8.3 - 2)
        const headgearMaterial = new THREE.MeshStandardMaterial()
        headgear.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = headgearMaterial
            }
        })
        baseNode.add(headgear)
    })

    objLoader.load('assets/models/pearlz!!/pearlz!!.obj', function (object) {
        let pearlz = object.clone()
        pearlz.rotateX(-Math.PI / 2 + 0.2)
        pearlz.scale.set(0.003, 0.003, 0.003)
        pearlz.position.set(0, -3.7 - 0.5, -5 - 2)
        const pearlzMaterial = new THREE.MeshStandardMaterial()
        pearlz.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = pearlzMaterial
            }
        })
        baseNode.add(pearlz)
    })

    const textureLoader = new THREE.TextureLoader(manager);

    textureLoader.load(
        'assets/textures/MoustacheAlpha.png',
        function (texture) {
            mask1 = new THREE.BufferGeometry();
            let maskPos = new Float32Array(468 * 3)
            let maskUV = new Float32Array(468 * 2)
            mask1.setAttribute("position", new THREE.BufferAttribute(maskPos, 3))
            mask1.setAttribute("uv", new THREE.BufferAttribute(maskUV, 2))
            for (let j = 0; j < 468; j++) {
                maskUV[j * 2] = texCoords[j][0]
                maskUV[j * 2 + 1] = 1 - texCoords[j][1]
            }
            mask1.getAttribute("uv").needsUpdate = true
            mask1.setIndex(indices)
            const mask1Material = new THREE.MeshStandardMaterial({ alphaMap: texture })
            mask1Material.transparent = true;
            const maskMesh1 = new THREE.Mesh(mask1, mask1Material)
            maskMesh1.renderOrder = 2
            mask1Material.depthTest = false
            scene.add(maskMesh1)

            mask2 = mask1.clone()
            const mask2Material = new THREE.MeshBasicMaterial({ alphaMap: texture })
            mask2Material.transparent = true;
            const maskMesh2 = new THREE.Mesh(mask2, mask2Material)
            maskMesh2.renderOrder = 3
            mask1Material.depthTest = false
            scene.add(maskMesh2)
        }
    )


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


// function setVideoUvs () {
//     let ptr = 0;
//     for (let j = 0; j < 468 * 2; j += 2) {
//         this.uvs[j] = this.flipped
//             ? this.positions[ptr] / this.w + 0.5
//             : 1 - (this.positions[ptr] / this.w + 0.5);
//         this.uvs[j + 1] = this.positions[ptr + 1] / this.h + 0.5;
//         ptr += 3;
//     }
//     this.getAttribute("uv").needsUpdate = true;
// }

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
            })

            mask1.setAttribute('position', new THREE.BufferAttribute(new Float32Array(mask1Vertices), 3));
            mask1.computeVertexNormals()
            for (let i = 0; i < 468; i++) {
                let x = mask1Vertices[3 * i]
                let y = mask1Vertices[3 * i + 1]
                let z = mask1Vertices[3 * i + 2]
                let deltaY = (y - baseNode.position.y) / (topNode.position.y - bottomNode.position.y)
                mask2Vertices.push(x + (x - baseNode.position.x) * Math.sin(deltaY))
                mask2Vertices.push(y)
                mask2Vertices.push(z)
            }

            mask2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(mask2Vertices), 3));
            mask2.computeVertexNormals()

            let m = getMatrix(newLandmarks)
            let q = new THREE.Quaternion()
            q.setFromRotationMatrix(m)
            baseNode.quaternion.set(q.x, q.y, q.z, q.w)
        }
    }
    //project video texture
    project(projectedObject)

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

    let aspect = camera.h.width / camera.h.height
    if (window.innerWidth > window.innerHeight) {
        height = window.innerHeight
        width = window.innerHeight * aspect
    } else {
        width = window.innerWidth
        height = window.innerWidth / aspect
    }
    canvasElement.width = width
    canvasElement.height = height
}


function resizeCanvas () {
    let aspect = camera.h.width / camera.h.height
    if (window.innerWidth > window.innerHeight) {
        height = window.innerHeight
        width = window.innerHeight * aspect
    } else {
        width = window.innerWidth
        height = window.innerWidth / aspect
    }

    canvasElement.width = width
    canvasElement.height = height
    threeCamera.aspect = width / height
    threeCamera.updateProjectionMatrix()
    renderer.setSize(width, height)

    landmarkScale = landmarkScaleConstant / height
}

window.addEventListener('resize', resizeCanvas);

setUpMediaPipe()
init()
faceMesh.onResults(onResults);