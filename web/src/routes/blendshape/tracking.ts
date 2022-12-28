import {
    ApplicationContext,
    FaceTracker,
    FPS,
    ResourceFileSystem,
    FaceTrackerResultDeserializer,
    FaceTrackerResultSerializer,
} from "@0xalter/mocap4face";

export function startTracking (videoElement: HTMLVideoElement, callback: Function) {
    const context = new ApplicationContext(window.location.href)
    const fs = new ResourceFileSystem(context)
    const fps = new FPS(1)
    // uncomment for de/serialization example bellow
    const serializer = FaceTrackerResultSerializer.create()
    const deserializer = FaceTrackerResultDeserializer.create(serializer.serializationFormat)
    console.log(deserializer)
    const asyncTracker = FaceTracker.createVideoTracker(fs)
        .then(tracker => {
            requestAnimationFrame(track);
            return tracker;
        })
        .logError('Could not start tracking')

    function track () {
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

        // Face tracking
        const lastResult = tracker.track(videoElement)
        //Serialize/deserialize tracking result for e.g. sending over WebRTC, use TrackerResultAvatarController for that
        if (lastResult) {
            // send this over network or save to file
            // DON'T FORGET to send serializer.serializationFormat as well, it's necessary for deserializer instantiation
            // const serialized = serializer.serialize(lastResult)
            // callback(serialized)
            // see deserializer creation above, serializationFormat is required
            //const deserialized = deserializer.deserialize(serialized)

            //const result = deserialized.trackerResult
            //console.log(result)
        }
        if (lastResult == null) {
            //setFaceRectangleVisible(false)
            callback(null)
            return // No face found or video frame could not be processed
        }
        callback(lastResult)
    }
}



