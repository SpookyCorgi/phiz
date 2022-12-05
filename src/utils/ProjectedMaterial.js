/*code based on https://github.com/marcofugaro/three-projected-material*/
import * as THREE from "three";

export default class ProjectedMaterial extends THREE.ShaderMaterial {
  constructor({ camera, texture, color = 0xffffff, opacity = 1.0, ...options } = {}) {
    if (!texture || !texture.isTexture) {
      throw new Error('Invalid texture passed to the ProjectedMaterial')
    }

    if (!camera || !camera.isCamera) {
      throw new Error('Invalid camera passed to the ProjectedMaterial')
    }

    // make sure the camera matrices are updated
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld()
    camera.updateWorldMatrix()

    // get the matrices from the camera so they're fixed in camera's original position
    const viewMatrixCamera = camera.matrixWorldInverse.clone()
    const projectionMatrixCamera = camera.projectionMatrix.clone()
    const modelMatrixCamera = camera.matrixWorld.clone()

    const projPosition = camera.position.clone()

    super({
      ...options,
      uniforms: {
        color: { value: new THREE.Color(color) },
        opacity: { value: opacity },
        textureUniform: { value: texture },
        viewMatrixCamera: { type: 'm4', value: viewMatrixCamera },
        projectionMatrixCamera: { type: 'm4', value: projectionMatrixCamera },
        modelMatrixCamera: { type: 'mat4', value: modelMatrixCamera },
        // we will set this later when we will have positioned the object
        savedModelMatrix: { type: 'mat4', value: new THREE.Matrix4() },
        projPosition: { type: 'v3', value: projPosition },
      },

      vertexShader: `
          uniform mat4 savedModelMatrix;
          uniform mat4 viewMatrixCamera;
          uniform mat4 projectionMatrixCamera;
          uniform mat4 modelMatrixCamera;

          varying vec4 vWorldPosition;
          varying vec3 vNormal;
          varying vec4 vTexCoords;


          void main() {
            vNormal = mat3(savedModelMatrix) * normal;
            vWorldPosition = savedModelMatrix * vec4(position, 1.0);
            vTexCoords = projectionMatrixCamera * viewMatrixCamera * vWorldPosition;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,

      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        uniform sampler2D textureUniform;
        uniform vec3 projPosition;

        varying vec3 vNormal;
        varying vec4 vWorldPosition;
        varying vec4 vTexCoords;
        
        void main() {
          vec2 uv = (vTexCoords.xy / vTexCoords.w) * 0.5 + 0.5;

          vec4 outColor = texture2D(textureUniform, uv) * vec4(color, opacity);

          // this makes sure we don't render also the back of the object
          vec3 projectorDirection = normalize(projPosition - vWorldPosition.xyz);
          float dotProduct = dot(vNormal, projectorDirection);
          if (dotProduct < 0.0) {
            // outColor = vec4(color, opacity);
          }

          gl_FragColor = outColor;
        }
      `,
    })

    this.isProjectedMaterial = true
  }
}

export function project (mesh) {
  if (!mesh.material.isProjectedMaterial) {
    throw new Error(`The mesh material must be a ProjectedMaterial`)
  }

  // make sure the matrix is updated
  mesh.updateMatrixWorld()

  // we save the object model matrix so it's projected relative
  // to that position, like a snapshot
  mesh.material.uniforms.savedModelMatrix.value.copy(mesh.matrixWorld)
}
