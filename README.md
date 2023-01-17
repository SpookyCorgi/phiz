[![Facial mocap from anywhere with any devices:Phiz](./assets/banner.png#gh-light-mode-only)](https://phizmocap.dev#gh-light-mode-only)

[![Facial mocap from anywhere with any devices:Phiz](./assets/banner-dark.png#gh-dark-mode-only)](https://phizmocap.dev#gh-dark-mode-only)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=HS5SG7G97J7AY&no_recurring=0&item_name=Thank+you+for+your+support+OwO.+May+the+3D+god+bless+you+infinite+inspirations%21&currency_code=USD)

## What is Phiz?
Phiz is a tool that allows you to perform **facial motion capture** from any device and location. It seamlessly integrate it into your preferred virtual production software with minimal setup.
- Works on **any device** with a camera (no iPhone lidar or depth camera needed).
- Peer to peer **secure connection** to send the data to any PC with **low latency**.
- Example projects and plugins for **Unreal Engine**, **Unity** and more.
- Supporting common avatar such as Metahuman and Ready Player Me.


## Getting started

Phiz consists of a **website**, a **desktop app**, and **custom plugins** for common game engines and 3D softwares.

### General use

1. Download and install the windows/macOS/linux executable files from release page.
2. Go to the [website](https://phizmocap.dev) on your device you planned to record your face with.
3. Copy the 9 character code (eg, p-AwCodE) from the website and paste it into the desktop app. If the connection is successful, you should see live data showing up in the app.
4. Now the data is available in localhost(127.0.0.1) on **port 41235** in [OSC format](#osc-format). 

### Unreal, Unity, Godot, and much more...
[**Check the wiki**](https://github.com/SpookyCorgi/phiz/wiki) for tutorials for 3rd parties software.
- [Unreal Engine](https://github.com/SpookyCorgi/phiz)
- [Unreal Engine without app (experimental)](https://github.com/SpookyCorgi/phiz/wiki/Unreal-Engine-without-additional-app)

## OSC format
There are currently 3 channels of data
- **/phiz/blendshapes**
  
  A float array [52 blendshape values] ranging from 0.0~1.0. **Check [here](/lib/blendshapes.ts) for the order of blendshapes**. 
  
  Currently the website only supports detecting 41/52 blendshapes. However the array still have a length of 52 with non-detecting blendshapes being 0.0.
  
- **/phiz/headQuaternion**
    
   A float array [x,y,z,w] ranging from -1.0 ~ 1.0. 
   
   Rotation of the head in quaternion in left-handed, Y-Up coordinate system.

- **/phiz/eyeRotation**
   A float array [leftZ, leftY, rightZ, rightY] in degrees in left-handed, Y-Up coordinate system.
   
   Extra eye rotation value derived from the eye blendshapes. CW is postive CCW is negative.



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
        - [ ] User profile for saving control settings.

- Desktop app:
    - [x] OSC data output
    - [ ] Livelink data output
    - [ ] Dynamic port selection

- 3rd party:
    - Unreal Engine:
        - [x] Example project for ready player me
        - [x] Example project for metahuman
        - [ ] Live link plugin for Unreal Engine 4
        - [ ] Embedded web server (replacing the desktop app)
    - Unity:
        - [x] Example project for ready player me
        - [ ] Embedded web server (replacing the desktop app)
    - VRChat:
        - [ ] Output support for VRChat
        - [ ] Example project for VRChat  


## License
The project is under GNU GPLv3 license. Credits are appreciated.


