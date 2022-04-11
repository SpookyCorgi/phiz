import './style.css'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

import {
  ApplicationContext,
  FacemojiAPI,
  FaceTracker,
  ResourceFileSystem,
} from '@facemoji/mocap4face'
import { Quaternion } from 'three';

let canvas, clock
let head, grpScale, eyeLeft, eyeRight, morphTargetDictionary, morphTargetInfluences
let recording = false
let recordedData = []
let video = document.querySelector("#videoElement");
let fps = 30;

//three js init
function init () {
  clock = new THREE.Clock()

  canvas = document.querySelector('#bg')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 100);
  camera.position.set(0, 0, 50)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientWidth / 4 * 3)

  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputEncoding = THREE.sRGBEncoding

  const fbxLoader = new FBXLoader()
  fbxLoader.load('face.fbx',
    (object) => {
      grpScale = object
      head = object.getObjectByName('head')
      eyeLeft = object.getObjectByName('eyeLeft')
      eyeRight = object.getObjectByName('eyeRight')
      for (let i = 0; i < 52; i++) {
        head.morphTargetDictionary[i] = i
      }
      morphTargetDictionary = head.morphTargetDictionary
      morphTargetInfluences = head.morphTargetInfluences
      scene.add(object)
    },
    (xhr) => {
      //console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      console.log(error)
    }
  )

  //light
  const dirLight = new THREE.DirectionalLight(0xffffff)
  dirLight.position.set(0, 200, 100)
  dirLight.castShadow = true
  scene.add(dirLight)

  //animation loop
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera)
  });

  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvas.clientWidth, canvas.clientWidth / 4 * 3)
  });

  //init buttons  
  document.getElementById("download").addEventListener("click", () => {
    let clip = createAnimation()
    const gltfExporter = new GLTFExporter()
    let options = { binary: true, animations: [clip] }
    gltfExporter.parse(
      grpScale,
      function (result) {
        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, 'scene.glb');
        } else {
          const output = JSON.stringify(result, null, 2);
          saveString(output, 'scene.gltf');
        }
      },
      options
    );
  });

  document.getElementById("record").addEventListener("click", () => {
    if (!recording) {
      recordedData = []
      document.getElementById("record").innerText = "Stop"
      recording = true
      document.getElementById("download").classList.add("hidden")
    } else {
      document.getElementById("record").innerText = "Record"
      recording = false
      document.getElementById("download").classList.remove("hidden")
    }
  })
  document.getElementById("download").classList.add("hidden")
}

function getWebcam () {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
}

function setFaceRectangleVisible (show) {
  if (document.getElementById("rectangle") !== null) {
    document.getElementById("rectangle").style.display = show ? 'block' : 'none'
  }
}

function tracking () {
  const context = new ApplicationContext(window.location.href)
  const fs = new ResourceFileSystem(context)
  //pleaseeeeeeeee don't steal it for your own use
  //this tool is free, facemohi's api is free too, go check them out they are awesome
  FacemojiAPI.initialize('dfe3er64ijyqmqtqg2nt6btjuus754busbnboca7ef553iw32qyf27i', context).then((activated) => {
    if (activated) {
      console.info('API successfully activated')
    } else {
      console.info('API could not be activated')
    }
  })

  // Initialize
  const asyncTracker = FaceTracker.createVideoTracker(fs)
    .then((tracker) => {
      //('Started tracking')
      requestAnimationFrame(track)
      return tracker
    })
    .logError('Could not start tracking')

  /**
  * Performs face tracking, called every animation frame.
  */
  function track () {
    requestAnimationFrame(track);
    var tracker = asyncTracker.currentValue;
    // Track only when everything is fully loaded and video is running
    if (!tracker || video === null) {
      return;
    }
    // Face tracking
    var lastResult = tracker.track(video);
    if (lastResult == null) {
      return; // No face found or video frame could not be processed
    }
    // Update 3D model
    let blendshapes = {}
    let rightBrowValue = 0
    let leftBrowValue = 0
    //rotation
    const rotationBlendshapes = faceRotationToBlendshapes(lastResult.rotationQuaternion)
    grpScale.setRotationFromEuler(new THREE.Euler(
      rotationBlendshapes[3][1] - rotationBlendshapes[2][1],
      rotationBlendshapes[0][1] - rotationBlendshapes[1][1],
      rotationBlendshapes[5][1] - rotationBlendshapes[4][1], 'XYZ'))
    eyeLeft.setRotationFromEuler(new THREE.Euler(
      -rotationBlendshapes[3][1] + rotationBlendshapes[2][1],
      -rotationBlendshapes[0][1] + rotationBlendshapes[1][1],
      -rotationBlendshapes[5][1] + rotationBlendshapes[4][1], 'XYZ'))
    eyeRight.setRotationFromEuler(new THREE.Euler(
      -rotationBlendshapes[3][1] + rotationBlendshapes[2][1],
      -rotationBlendshapes[0][1] + rotationBlendshapes[1][1],
      -rotationBlendshapes[5][1] + rotationBlendshapes[4][1], 'XYZ'))
    //affect morphtargetInfluence
    for (const [name, value] of lastResult.blendshapes) {
      if (name == 'browInnerUp_R') {
        rightBrowValue = value
      }
      if (name == 'browInnerUp_L') {
        leftBrowValue = value
      }
      if (morphTargetDictionary[name] != undefined) {
        morphTargetInfluences[morphTargetDictionary[name]] = value
        if (recording) {
          blendshapes[name] = value
        }
      }
    }
    //eyebrow inner
    morphTargetInfluences[morphTargetDictionary['browInnerUp']] = (rightBrowValue + leftBrowValue) / 2
    if (recording) {
      blendshapes['browInnerUp'] = (rightBrowValue + leftBrowValue) / 2
    }

    if (recording) {
      let time = clock.getElapsedTime()
      let rotation = new THREE.Euler(
        rotationBlendshapes[3][1] - rotationBlendshapes[2][1],
        rotationBlendshapes[0][1] - rotationBlendshapes[1][1],
        rotationBlendshapes[5][1] - rotationBlendshapes[4][1], 'XYZ')
      let quaternion = new THREE.Quaternion()
      quaternion.setFromEuler(rotation)
      let obj = {
        time: time,
        blendshapes: blendshapes,
        rotation: quaternion
      }
      recordedData.push(obj)
    }

    // Update face reactangle overlay
    let faceRectangleElement = document.getElementById("rectangle")
    if (faceRectangleElement !== null) {
      // Convert face rectangle from tracker coordinates to HTML coordinates
      const rect = lastResult.faceRectangle
        .flipY(lastResult.inputImageSize.y)
        .normalizeBy(lastResult.inputImageSize)
        .scale(video.clientWidth, video.clientHeight)
        .scaleAroundCenter(0.8, 0.8) // mocap4face uses a wider rect for better detection, a smaller one is more pleasing to the eye though
      faceRectangleElement.style.position = 'relative'
      faceRectangleElement.style.left = rect.x.toString() + 'px'
      faceRectangleElement.style.top = rect.y.toString() + 'px'
      faceRectangleElement.style.width = rect.width.toString() + 'px'
      faceRectangleElement.style.height = rect.height.toString() + 'px'

      // At this point the tracker always detected some face but it might be a low confidence one.
      // hasFace() checks whether the tracker is confident enough about the detection.
      // You can also read the confidence value itself by checking lastResult.confidence
      setFaceRectangleVisible(lastResult.hasFace())
    }
  }
  /**
  * Converts head rotation to blendshape-like values so that we can show it in the UI as well.
  * @param rotation rotation from the tracker
  * @returns rotation represented as 6 blendshapes
  */
  function faceRotationToBlendshapes (rotation) {
    var euler = rotation.toEuler();
    var halfPi = Math.PI * 0.5;
    return [
      ['headLeft', Math.max(0, euler.y) / halfPi],
      ['headRight', -Math.min(0, euler.y) / halfPi],
      ['headUp', -Math.min(0, euler.x) / halfPi],
      ['headDown', Math.max(0, euler.x) / halfPi],
      ['headRollLeft', -Math.min(0, euler.z) / halfPi],
      ['headRollRight', Math.max(0, euler.z) / halfPi],
    ];
  }
}

function createAnimation () {
  if (recordedData.length != 0) {
    let animation = []
    for (let i = 0; i < 52; i++) {
      animation.push([])
    }
    let rotationAnimation = []
    let time = []
    let startTime = 0
    let finishedFrames = 0
    recordedData.forEach((d, i) => {
      if (i == 0) {
        //first frame
        startTime = d.time
        Object.entries(d.blendshapes).forEach(([key, value]) => {
          animation[morphTargetDictionary[key]].push(value)
        });
        rotationAnimation.push(d.rotation)
        time.push(finishedFrames / fps)
        finishedFrames++
      } else {
        //interpolate frames
        while (d.time > (finishedFrames / fps + startTime)) {
          let timeBefore = ((finishedFrames / fps + startTime) - recordedData[i - 1].time)
          let timeAfter = (d.time - (finishedFrames / fps + startTime))
          Object.entries(d.blendshapes).forEach(([key, value]) => {
            let valueAfter = value
            let valueBefore = recordedData[i - 1].blendshapes[key]
            animation[morphTargetDictionary[key]].push((valueBefore * timeAfter + valueAfter * timeBefore) / (timeBefore + timeAfter))
          });
          let quaternion = new Quaternion()
          quaternion.slerpQuaternions(recordedData[i - 1].rotation, d.rotation, timeBefore / (timeBefore + timeAfter))
          rotationAnimation.push(quaternion)
          time.push(finishedFrames / fps)
          finishedFrames++
        }
      }
    })
    let tracks = []
    //create morph animation
    Object.entries(recordedData[0].blendshapes).forEach(([key, value]) => {
      let i = morphTargetDictionary[key]
      let track = new THREE.NumberKeyframeTrack(`head.morphTargetInfluences[${i}]`, time, animation[i])
      tracks.push(track)
    });
    //create rotation animation
    let groupQuaternionFlat = []
    let eyeQuaternionFlat = []
    rotationAnimation.forEach(d => {
      groupQuaternionFlat.push(d.x)
      groupQuaternionFlat.push(d.y)
      groupQuaternionFlat.push(d.z)
      groupQuaternionFlat.push(d.w)
      let q = d.clone()
      q.invert()
      eyeQuaternionFlat.push(q.x)
      eyeQuaternionFlat.push(q.y)
      eyeQuaternionFlat.push(q.z)
      eyeQuaternionFlat.push(q.w)
    })
    let groupRotationTrack = new THREE.QuaternionKeyframeTrack(`grp_scale.quaternion`, time, groupQuaternionFlat)
    tracks.push(groupRotationTrack)
    let eyeLeftRotationTrack = new THREE.QuaternionKeyframeTrack(`eyeLeft.quaternion`, time, eyeQuaternionFlat)
    let eyeRightRotationTrack = new THREE.QuaternionKeyframeTrack(`eyeRight.quaternion`, time, eyeQuaternionFlat)
    tracks.push(eyeLeftRotationTrack)
    tracks.push(eyeRightRotationTrack)
    const clip = new THREE.AnimationClip('animation', -1, tracks);
    return clip
  }
  return null
}

//saving 3d files
const link = document.createElement('a')
link.style.display = 'none'
document.body.appendChild(link)
function save (blob, filename) {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function saveString (text, filename) {
  save(new Blob([text], { type: 'text/plain' }), filename);
}

function saveArrayBuffer (buffer, filename) {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

getWebcam();
init();
tracking();

