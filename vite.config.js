import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as fs from 'fs';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), mediapipe_workaround()],
  base: "/face-capture/",
})

//workaround to fix mediapipe incompatibility with rollup
function mediapipe_workaround () {
  return {
    name: "mediapipe_workaround",
    load (id) {
      if (path.basename(id) === "face_mesh.js") {
        let code = fs.readFileSync(id, "utf-8")
        code += "exports.FaceMesh = FaceMesh;"
        code += "exports.matrixDataToMatrix = matrixDataToMatrix;"
        return { code }
      } else {
        return null
      }
    },
  }
}