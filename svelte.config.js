// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
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
