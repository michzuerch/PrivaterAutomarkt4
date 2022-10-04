import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: adapterNode,
			precompress: false
		})
	}
};
