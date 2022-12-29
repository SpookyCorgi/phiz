//import adapter from '@sveltejs/adapter-node';
//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "dist",
			assets: "dist"
		}),
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === "production" ? "/face-capture" : "",
		}
	}
};

export default config;
