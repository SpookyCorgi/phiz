import { sveltekit } from '@sveltejs/kit/vite';
//import { PeerServer } from 'peer'
//import basicSsl from '@vitejs/plugin-basic-ssl'
import * as fs from 'fs';
import * as path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		mediapipe_workaround(),
		//basicSsl()
		//https://github.com/sveltejs/kit/issues/1491#issuecomment-955205323
		// {
		// 	name: "multiplayer",
		// 	configureServer (server) {
		// 		const peerServer = PeerServer({ port: 9000, path: '/' });
		// 		console.log('Peer server injected');
		// 	},
		// },
	],
	optimizeDeps: {
		include: [
			"src/lib/@0xalter/mocap4face"
		]
	},
	build: {
		commonjsOptions: {
			include: [/@0xalter/, /node_modules/],
		},
	},
};


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

export default config;
