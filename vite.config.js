import { sveltekit } from '@sveltejs/kit/vite';
import { PeerServer } from 'peer'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		//https://github.com/sveltejs/kit/issues/1491#issuecomment-955205323
		{
			name: "multiplayer",
			configureServer (server) {
				const peerServer = PeerServer({ port: 9000, path: '/' });
				console.log('Peer server injected');
			},
		},
	],
};

export default config;
