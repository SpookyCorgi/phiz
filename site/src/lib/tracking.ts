import {
    ApplicationContext,
    FaceTracker,
    FPS,
    ResourceFileSystem,
} from "@0xalter/mocap4face";
import * as tf from '@tensorflow/tfjs-core';
import * as tflite from '@tensorflow/tfjs-tflite';
import { mediapipeBlendshapes } from '../../../lib/blendshapes';

import { FaceMesh } from '@mediapipe/face_mesh/';


export interface TrackingResult {
    id: number,
    blendshapes: Map<string, number>,
    rotation: { x: number, y: number, z: number, w: number },
    rect: { x: number, y: number, width: number, height: number },
    inputImageSize: { x: number, y: number },
    mediaPipeData: Map<string, number> | null
}
let faceMesh: FaceMesh;
let mediapipeProcessed: boolean = false;
let tfliteModel: any;
let result: TrackingResult = {
    id: 0,
    blendshapes: new Map<string, number>(),
    rotation: { x: 0, y: 0, z: 0, w: 0 },
    rect: { x: 0, y: 0, width: 0, height: 0 },
    inputImageSize: { x: 0, y: 0 },
    mediaPipeData: null
};
let mediapipeEnabled: boolean = false;

const mediapipeSelectedLandmarks: number[] = [
    0, 1, 4, 5, 6, 7, 8, 10, 13, 14, 17, 21, 33, 37, 39, 40, 46, 52, 53, 54, 55, 58, 61, 63, 65, 66,
    67, 70, 78, 80, 81, 82, 84, 87, 88, 91, 93, 95, 103, 105, 107, 109, 127, 132, 133, 136, 144,
    145, 146, 148, 149, 150, 152, 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 168, 172, 173,
    176, 178, 181, 185, 191, 195, 197, 234, 246, 249, 251, 263, 267, 269, 270, 276, 282, 283, 284,
    285, 288, 291, 293, 295, 296, 297, 300, 308, 310, 311, 312, 314, 317, 318, 321, 323, 324, 332,
    334, 336, 338, 356, 361, 362, 365, 373, 374, 375, 377, 378, 379, 380, 381, 382, 384, 385, 386,
    387, 388, 389, 390, 397, 398, 400, 402, 405, 409, 415, 454, 466, 468, 469, 470, 471, 472, 473,
    474, 475, 476, 477
];

function onResults (results: any) {
    if (results.multiFaceLandmarks) {
        mediapipeProcessed = true;
        for (const landmarks of results.multiFaceLandmarks) {
            let processedLandmarks: [number, number][] = [];
            mediapipeSelectedLandmarks.forEach((num, index) => {
                const l = landmarks[num];
                processedLandmarks.push([l.x * 640, l.y * 480]);
            });
            let input = tf.tensor([processedLandmarks]);
            let outputTensor = tfliteModel.predict(input) as tf.Tensor;
            let output = outputTensor.dataSync();
            let values = new Map<string, number>();
            for (let i = 0; i < mediapipeBlendshapes.length; i++) {
                values.set(mediapipeBlendshapes[i], output[i]);
            }
            result.mediaPipeData = values;
        }
    }
}

async function setupMediaPipe () {
    faceMesh = new FaceMesh({
        locateFile: (file) => {
            return `./face_mesh/${file}`;
        }
    });
    faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });
    faceMesh.onResults(onResults);

    tflite.setWasmPath('./mediapipe/')
    tfliteModel = await tflite.loadTFLiteModel(
        'https://storage.googleapis.com/mediapipe-assets/face_blendshapes.tflite'
    )

    mediapipeProcessed = true;
}

export function mediapipeState (state: boolean) {
    mediapipeEnabled = state;
}

export function startTracking (videoElement: HTMLVideoElement, callback: Function, fpsCallback: Function, loadCallback: Function = Function) {
    setupMediaPipe()

    const context = new ApplicationContext(window.location.origin)
    const fs = new ResourceFileSystem(context)
    const fps = new FPS(1)
    // uncomment for de/serialization example bellow
    // const serializer = FaceTrackerResultSerializer.create()
    // const deserializer = FaceTrackerResultDeserializer.create(serializer.serializationFormat)
    // console.log(deserializer)
    const asyncTracker = FaceTracker.createVideoTracker(fs)
        .then(tracker => {
            requestAnimationFrame(track);
            loadCallback()
            return tracker;
        })
        .logError('Could not start tracking')

    async function track () {
        requestAnimationFrame(track);
        const tracker = asyncTracker.currentValue
        // Track only when everything is fully loaded and video is running
        if (!tracker || videoElement === null) {
            //setFaceRectangleVisible(false)
            callback(null)
            return
        }

        if (videoElement.paused || document.hidden) {
            //statusElement.hidden = false
            callback(null)
            return
        }

        fps.tick((currentFps) => {
            fpsCallback(currentFps)
        })

        //send videoframe to mediapipe
        if (mediapipeEnabled) {
            if (mediapipeProcessed) {
                mediapipeProcessed = false;
                faceMesh.send({ image: videoElement })
            }
        } else {
            result.mediaPipeData = null
        }

        // Face tracking
        const lastResult = tracker.track(videoElement)

        //Serialize/deserialize tracking result for e.g. sending over WebRTC, use TrackerResultAvatarController for that
        if (lastResult) {
            let values = new Map<string, number>();
            for (const [name, value] of lastResult.blendshapes) {
                //clamp value to 0.0~1.0
                values.set(name, Math.max(0, Math.min(1, value)));
            }
            result.id = Date.now()
            result.blendshapes = values
            result.rotation = {
                x: lastResult.rotationQuaternion.xyzw.x,
                y: lastResult.rotationQuaternion.xyzw.y,
                z: lastResult.rotationQuaternion.xyzw.z,
                w: lastResult.rotationQuaternion.xyzw.w
            }
            result.rect = {
                x: lastResult.faceRectangle.x,
                y: lastResult.faceRectangle.y,
                width: lastResult.faceRectangle.width,
                height: lastResult.faceRectangle.height
            }
            result.inputImageSize = {
                x: lastResult.inputImageSize.x,
                y: lastResult.inputImageSize.y
            }
            callback(result)
        }
        if (lastResult == null) {
            //setFaceRectangleVisible(false)
            callback(null)
            return // No face found or video frame could not be processed
        }

    }
}



