[![Facial mocap from anywhere with any devices:Phiz](./assets/banner.png#gh-light-mode-only)](https://phizmocap.dev#gh-light-mode-only)

[![Facial mocap from anywhere with any devices:Phiz](./assets/banner-dark.png#gh-dark-mode-only)](https://phizmocap.dev#gh-dark-mode-only)

[![GitHub deployments](https://img.shields.io/github/deployments/spookycorgi/phiz/production?label=vercel&logo=vercel)](https://phizmocap.dev)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=HS5SG7G97J7AY&no_recurring=0&item_name=Thank+you+for+your+support+OwO.+May+the+3D+god+bless+you+infinite+inspirations%21&currency_code=USD)

## What is Phiz?
Phiz is an open-source tool that gives you the power to do facial motion capture right in your browser, using the webcam on any mobile device or computer. You can then send the blendshape data, either locally or remotely, to another browser or popular game engines; you even have the option to broadcast the blendshape data through OSC protocol using Phiz's cross-platform app.


## How does it work?
- **Facial Motion Capture... in Your Browser**

    Phiz's motion capture system was built using [Mocap4face](https://github.com/facemoji/mocap4face) and [Google mediapipe](https://github.com/google/mediapipe)'s machine learning model. **No iPhone LiDAR or RGBD camera needed!** The underlying ML code is not fixed and will be updated whenever there is a better model.

- **Streaming Data: Unreal and Unity Support**

    Phiz includes custom plugins that fire up WebSocket servers within [Unreal Engine](https://www.phizmocap.dev/docs/unreal/basic-usage) and [Unity](https://www.phizmocap.dev/docs/unity/basic-usage), which are used to receive live data from your browser. The plugins also include convenient presets that you can easily use with popular 3D avatars, such as Metahumans and ReadyPlayerMe characters.

- **Streaming Data: Browser to Browser & Browser to OSC App**

    Phiz uses WebRTC (the protocol used in video calling) to send data from one browser to another or from a browser to the app. However, no image or video is sent at all. WebRTC also allows for  peer-to-peer secure connection and low latency.
    

- **ARKit Support**

    Phiz uses the same blendshapes as ARKit. Check out the [Blendshapes page](https://www.phizmocap.dev/docs/specs/blendshapes) for more information about the blendshape names and orders.


## How do I use it?
**Disclaimer:** Ensure the browser page remains active during recording.

1. Visit the [capture page](https://www.phizmocap.dev/capture) and allow the website to access your camera.
2. Select the correct camera, choose the desired frame smoothing, and decide whether to use sensitive motion capture or not.
3. Select one of the two methods to send the captured data:

   - **Local:**
     - Use Phiz's custom plugin to send data directly to [Unreal engine](https://www.phizmocap.dev/docs/unreal/basic-usage) or [Unity](https://www.phizmocap.dev/docs/unity/basic-usage) using your defined URL and port.
     - Check the [documentation](https://www.phizmocap.dev/docs) for more information.

   - **Remote:**
     - Click on the 8-character code starting with "p-" (e.g., p-AwCodE) to copy it.
     - To send data to another device (e.g., recording on phone and controlling avatar in Unreal on PC):
       1. Open the [receive page](https://www.phizmocap.dev/receive) on another device.
       2. Paste the copied 8-character code.
       3. You should now see live streaming data on your device and be able to share it locally.
     - To send data to the Phiz App for broadcasting OSC data:
       1. Download and install the [Phiz App](https://github.com/SpookyCorgi/phiz/releases/latest) for your platform.
       2. Open the app and paste the 8-character code.
       3. The data will now be available in OSC format on your chosen port.

        If everything is correctly connected but no data is showing up, try refreshing the page to generate a new code.


## Plugins
### Unity
1. Download the latest Unity file (phiz-unity-vx.x.x.zip) from the [release page](https://github.com/SpookyCorgi/phiz/releases/latest)
2. Unzip it and drag all the files inside your Unity Assets folder.
3. Check out [Example.cs](https://github.com/SpookyCorgi/phiz/blob/main/plugins/unity/Example.cs) for basic usage. (It's also included in the release zip.)

Check out the [docs](https://www.phizmocap.dev/docs) for more examples!
- [Unity Basic Usage](https://www.phizmocap.dev/docs/unity/basic-usage)
- [Unity Ready Player Me Example](https://www.phizmocap.dev/docs/unity/ready-player-me-example)

### Unreal
1. Download the latest Unreal file (phiz-unreal-vx.x.x.zip) from the [release page](https://github.com/SpookyCorgi/phiz/releases/latest)
2. Unzip it. Copy the Plugins folder to inside your project's root folder.
3. Restart Unreal. Now all the necessary modules will be automatically compiled.

Check out the [docs](https://www.phizmocap.dev/docs) for instant setup for metahuman and other ways for common avatars.
- [Unreal Engine Basic Usage](https://www.phizmocap.dev/docs/unity/basic-usage)
- [Unreal Enigine Metahuman Example](https://www.phizmocap.dev/docs/unreal/metahuman-example)

## OSC App
Phiz also provides apps for Windows, MacOS, and Linux. These apps can receive data from the website and send OSC data to any software on your desktop.

1. Download the latest app for your platform from the [release page](https://github.com/SpookyCorgi/phiz/releases/latest)

2. Follow the [App Installation](https://www.phizmocap.dev/docs/osc-app/app-installation) guide to install the app. Note that Apple and Microsoft may warn you that the app is potentially unsafe if the developer hasn't paid them an annual fee. However, this is an open-source project, and all source code is available in the repository for review.

3. Enter the 8-character code starting with "p-" (e.g., p-AwCodE). If successfully connected, you should see the incoming data.

4. Enter the port for OSC data to be sent to. Now the data is available throughout your computer.

Checkout the [PureData example](https://www.phizmocap.dev/docs/osc-app/puredata-example) to learn how to use the 52 blendshapes as a synthesizer. 

## Data format
**All data follows the OSC format.
There are currently 4 channels of data.**
- **/phiz/blendshapes**
  
  A float array [52 blendshape values] ranging from 0.0~1.0. **Check [here](https://github.com/SpookyCorgi/phiz/wiki/Blendshapes-Format) for the order of blendshapes**. 
  
- **/phiz/headRotation**
    
   A float array [x,y,z,w] ranging from -1.0 ~ 1.0. 

These are extra eye rotation roughly estimated from the eyeLookAt blendshapes. It's usually not needed since common avatar has eye rotation build in their blendshapes.
- **/phiz/leftEyeRotation**

   A float array [x,y,z,w] ranging from -1.0 ~ 1.0.
   
- **/phiz/rightEyeRotation**

    A float array [x,y,z,w] ranging from -1.0 ~ 1.0.

All rotations are **quaternions in right-handed, Y-Up, Z-Forward** coordinate system.

![Coordinate axis](./assets/coordinate-axes-light.png#gh-light-mode-only)
![Coordinate axis](./assets/coordinate-axes-dark.png#gh-dark-mode-only)

## Using Phiz?
Let us know if you are using Phiz! We would love to see what you are making with Phiz and would be delighted to showcase your work.

## License
Phiz is distributed under terms of General Public License v3. Put simply, this means:

- You are free to use Phiz, for any purpose
- You can study how Phiz works and change it
- You can distribute changed versions of Phiz

Note that once you distribute modified version of Phiz, you also must **publish your changes to the source code under GPLv3 as well**.

The accompanying plugins of Phiz are released under the MIT license.
**Which means you can include/embedded the plugins in your Unity and Unreal projects carefree.**