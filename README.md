[![Facial mocap from anywhere with any devices:Phiz](./assets/banner.png#gh-light-mode-only)](https://phizmocap.dev#gh-light-mode-only)

[![Facial mocap from anywhere with any devices:Phiz](./assets/banner-dark.png#gh-dark-mode-only)](https://phizmocap.dev#gh-dark-mode-only)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=HS5SG7G97J7AY&no_recurring=0&item_name=Thank+you+for+your+support+OwO.+May+the+3D+god+bless+you+infinite+inspirations%21&currency_code=USD)

## What is Phiz?
Phiz is a tool that allows you to perform facial motion capture from any device and location. It seamlessly integrate it into your preferred virtual production software with minimal setup and low latency.
- Works on any device with a camera (no iPhone lidar or depth camera needed).
- Peer to peer secure connection to send the data to any pc with low latency.
- Example projects and plugins for Unreal Engine, Unity and more.
- Supporting common avatar such as Metahuman and Ready Player Me.


## How to use?
Phiz consists of a **website**, a **desktop app**, and **custom plugins** for common game engines and 3D softwares.

1. Download and install the windows/macOS/linux executable files from release page.
2. Go to the [website](https://phizmocap.dev) on your device you planned to record your face with.
3. Copy the code (eg, p-AwCodE) from the website and paste it into the desktop app. If the connection is successful, you should see live data showing up in the app.
4. Now the data is available in localhost(127.0.0.1) on **port 41235** in OSC format. Check out the plugin session to setup your choice of virtual production software.

## Plugins Setup
### Unreal Engine Without Additional App (Only works on Win64 pc)
**This feature is experimental! Might crash!**
1. Download the latest release **ue-node-example** for your Unreal version. Unzip it.
2. Copy the *Plugins* folder into your {project root} (usually at Documents/Unreal Project/Project Name/)
3. Copy everything in the *Content* folder into **your project Content folder** ({project root}/Content/)

**For metahuman**

4. Open your metahuman blueprint and navigate to **face** component.

    ![image](https://user-images.githubusercontent.com/37282156/212817085-bc3f2dd7-e78d-4486-b82c-aebd31e4ae15.png)
5. In the details panel, find the Animation section and set the following.

    - Animation Mode: **Use Animation Blueprint**
    - Anim Class: **AnimBP_MH_Node**
    
    ![image](https://user-images.githubusercontent.com/37282156/212817466-ceabdb47-3527-461c-b291-759d20496c2b.png)
6. Go back to your level and drag **BP_Node** into your level

    ![image](https://user-images.githubusercontent.com/37282156/212818081-19417d39-e809-4ba3-8940-240bf475da7f.png)
    
7. Copy the **8 character code** from the website and paste it to the **ID** section in BP_Node's details panel.
    
    ![image](https://user-images.githubusercontent.com/37282156/212818380-88120db3-52cc-4f6f-8c74-5a1be3f80ecf.png)
    
8. Run you scene! If this is the first time running, **accept the prompt popup asking for Node js access**.

    If you see texts printed out like the following picture in you scene you should see your metahuman moving :)

    ![image](https://user-images.githubusercontent.com/37282156/212818741-01d6abed-9708-4c76-a778-807220ec2afd.png)

### FAQ
- **Nothing happens when I clicked play what's wrong?**

    If you see *"LogTemp: Error: Main script connection error! Likely crash, stopping main script."* in your log, that's a known bug from NodeJs Unreal plugin this example is using. Restart your scene a couple times and then it might work.

- **Everything is connected but my metahuman isn't moving**

    Are you active on the website right now? If you are on mobile and accidentally turn off your screen, refresh the page and paste the new code again.

- **No ID set**

    You forgot to put your ID in the BP_Node







   
## Data format
Check [blendshape mapping](/lib/blendshapes.ts)



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

