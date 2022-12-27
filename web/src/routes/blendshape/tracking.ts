import { ApplicationContext, FaceTracker, FPS, ResourceFileSystem } from "@0xalter/mocap4face";

export function startTracking (videoElement: HTMLVideoElement, callback: Function) {
    const context = new ApplicationContext(window.location.href)
    const fs = new ResourceFileSystem(context)
    const fps = new FPS(1)

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
        if (lastResult == null) {
            //setFaceRectangleVisible(false)
            callback(null)
            return // No face found or video frame could not be processed
        }
        callback(lastResult)
    }
}



