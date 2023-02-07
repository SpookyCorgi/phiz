[![Facial mocap from anywhere with any devices:Phiz](./assets/banner.png#gh-light-mode-only)](https://phizmocap.dev#gh-light-mode-only)

[![Facial mocap from anywhere with any devices:Phiz](./assets/banner-dark.png#gh-dark-mode-only)](https://phizmocap.dev#gh-dark-mode-only)

[![GitHub deployments](https://img.shields.io/github/deployments/spookycorgi/phiz/production?label=vercel&logo=vercel)](https://phizmocap.dev)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=HS5SG7G97J7AY&no_recurring=0&item_name=Thank+you+for+your+support+OwO.+May+the+3D+god+bless+you+infinite+inspirations%21&currency_code=USD)

## What is Phiz?
Phiz is a tool that allows you to perform **facial motion capture** from any device and location. It can be seamlessly integrated into your preferred virtual production software with minimal setup.
- Works on **any device** with a camera and a browser (no iPhone lidar or depth camera needed).
- Peer to peer **secure connection** to transfer with **low latency** using WebRTC.
- Install custom plugins for **Unreal Engine** and **Unity** with just drag and drop.
- **ARKit support**. Working on common avatar such as **Metahuman** and **Ready Player Me**.


## Getting started
**Important! The browser page needs to be active when recording. If you closed your phone, refresh the page to generate a new code.**

1. Go to [phizmocap.dev/blendshapes](https://phizmocap.dev/blendshapes) on your recording device.
2. Allow camera access.

**For recording and controlling avatar on the same device**

3. Select local mode.

**For recording and controlling avatar on seperate devices**

3. Select remote mode. Copy the 9 character code (eg, p-AwCodE). Go to [phizmocap.dev/data](https://www.phizmocap.dev/data) on your computer and paste the code.

4. Enter the correct host and post based on plugin's setup. Press connect. See plugins section below for more details.

## Plugins
### Unity
1. Download the latest Unity file (phiz-unity-vx.x.x.zip) from the [release page](https://github.com/SpookyCorgi/phiz/releases)
2. Unzip it and drag all the files inside your Unity Assets folder.
3. Check out [Example.cs](https://github.com/SpookyCorgi/phiz/blob/main/plugins/unity/Example.cs) for basic usage. (It's also included in the release zip.)

Check out the [wiki](https://github.com/SpookyCorgi/phiz/wiki) for more examples!
- [Unity Basic Usage](https://github.com/SpookyCorgi/phiz/wiki/Unity-Basic-Usage)
- [Unity Ready Player Me Example](https://github.com/SpookyCorgi/phiz/wiki/Unity-Ready-Player-Me-Example)

### Unreal
1. Download the latest Unreal file (phiz-unreal-vx.x.x.zip) from the [release page](https://github.com/SpookyCorgi/phiz/releases)
2. Unzip it. Copy the Phiz folder to inside your project's Plugins folder. If you don't have a Plugins folder, create one.
3. Copy the PhizAssets folder and paste it inside your Unreal Assets folder.
4. Restart Unreal. Now all the necessary modules will be automatically compiled.

Check out the [wiki](https://github.com/SpookyCorgi/phiz/wiki) for instant setup for metahuman and other ways for common avatars.
- [Unity Basic Usage](https://github.com/SpookyCorgi/phiz/wiki/Unreal-Basic-Usage)
- [Unity Ready Player Me Example](https://github.com/SpookyCorgi/phiz/wiki/Unreal-Metahuman-Example)

## OSC App
Phiz also comes with Windows, macOS and Linux apps. It can be used to receive data from the website and send OSC data to any software on your desktop.

1. Download the latest app for your platform from the [release page](https://github.com/SpookyCorgi/phiz/releases)

2. See [App Installation](https://github.com/SpookyCorgi/phiz/wiki/App-Installation) for installing the app. Apple and Microsoft will say my app is a virus if I don't pay them loads of money every year. This is an opensource project. You can check the source code yourself.

3. Enter the 9 character code (eg, p-AwCodE). If successfully connected, you should see the incoming data.

4. Enter the port for OSC data to be sent to. Now the data are available everywhere on your computer :)

## Data format
**All data follows the OSC format.
There are currently 4 channels of data.**
- **/phiz/blendshapes**
  
  A float array [52 blendshape values] ranging from 0.0~1.0. **Check [here](https://github.com/SpookyCorgi/phiz/wiki/Blendshapes-Format) for the order of blendshapes**. 
  
  Currently the website only supports detecting 41/52 blendshapes. However the array still have a length of 52 with non-detecting blendshapes being 0.0.
  
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

## Features
- Website:
    - Face tracking:
        - [x] 41/52 arkit compatible expression blendshapes (achieved by mocap4face)
        - [ ] Custom support for the remain 11 arkit blendshapes (achieved by mediapipe)
        - [x] Head position and rotation quaternion
        - [x] Eye rotation output
    - Face mesh:
        - [ ] 468 face mesh points
        - [ ] Face mesh texture with UV
    - Audio:
        - [ ] Audio channel
    - Advanced:
        - [ ] Upload custom avatar to preview
        - [ ] Min, max and curve slider for custom blendshape control
        - [ ] User profile for saving control settings
        - [ ] User-upload-avatar streaming page for obs browser source

- Desktop app:
    - [x] OSC data output
    - [x] Dynamic port selection
    - [ ] Support for multiple mocap input

- 3rd party:
    - Unreal Engine:
        - ~~[x] Embedded web server (replacing the desktop app)~~
        - [x] Websocket server plugin for connection
        - [x] Example project for ready player me
        - [x] Example project for metahuman

    - Unity:
        - ~~[ ] Embedded web server (replacing the desktop app)~~
        - [x] Websocket server plugin for connection
        - [x] Example project for ready player me
        - [x] Multiple mocap support

    - VRChat:
        - [ ] Output support for VRChat
        - [ ] Example project for VRChat  
    - VtuberStudio


## License
The project is under GNU GPLv3 license. Credits are appreciated.


