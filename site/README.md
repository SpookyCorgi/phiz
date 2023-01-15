# Phiz Website

This website is build with [SvelteKit](https://kit.svelte.dev/) and [skeleton-ui](https://www.skeleton.dev/).

https://www.phizmocap.dev/

Website structure
```bash
├── app.d.ts
├── app.html
├── app.postcss
├── lib
│   ├── @0xalter
│   │   └── mocap4face      //face blendshape tracking library
│   ├── images              //assets
│   └── utilities           //custom ui components
│       ├── LightSwitch
│       └── SvgIcon
├── routes
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── +page.ts
│   ├── Header.svelte
│   └── blendshape          //blendshape tracking page
│       ├── +page.svelte
│       ├── +page.ts
│       ├── camera.ts       //helper code for accessing camera
│       ├── peer.ts         //webrtc using peerjs
│       └── tracking.ts     //face tracking code
└── theme.postcss

```