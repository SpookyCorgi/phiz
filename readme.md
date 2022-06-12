<h1>hologram-mythography</h1>
<h2>Github Link</h2>

https://github.com/ScarySheep/hologram-mythography

<h2>Website dependencies</h2>

Google mediapipe - https://google.github.io/mediapipe/solutions/face_mesh.html

Three.js - https://threejs.org/

<h2>How does it work?</h2>

Base on the 2d face landmarks google mediapipe detects, recalculate it into a 3d coordinate system, and attach different 3d models, materials, textures using three js.

<h2>Filter structure & Technical requirements</h2>
<h3>Static Assets:</h3>
<ul>
<li>✔️ elf2</li>
<li>✔️ Face texture projection onto the 3d object</li>
<li>✔️ elf3</li>
<li>✔️ ring 1~5</li>
<li>✔️ head gear</li>
<li>✔️ pearlz</li>
<li>❌ butterfly (couldn’t find the asset)</li>
</ul>
<h3>Face tracking assets</h3>
<ul>
<li>✔️ moustache 1
<ul>
❌ eye & forehead distortion (see below explanation)
</ul>
</li>
<li>✔️ moustache 2
<ul>✔️ triangularize (direct editing position without using distortion)
</ul>
</li>
</ul>
<h3>Non 3D asset</h3>
<ul>
❌ Face distortion (not sure about possibility)
</ul>
<h3>Distortion problem:</h3>

The vertices of the face mesh and face landmark detection on the website is different from the spark ar’s face mesh. So the distortion pack couldn’t be directly applied to the web version. We can either try to mimic the effect by shaders, or rebuild the whole distortion pack according to the web face mesh. 
