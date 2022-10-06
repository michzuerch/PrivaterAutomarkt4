const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',

	theme: {
		extend: {
			fontFamily: {
				sans: ['uncut-sans', ...defaultTheme.fontFamily.sans],
				serif: ['sprat', ...defaultTheme.fontFamily.serif]
			}
		}
	},

	plugins: [require('@tailwindcss/typography'),require('@tailwindcss/lineclamp'), require('@tailwindcss/forms'), require('daisyui')],

	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		//themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],

		darkTheme: 'dark'
	}
};

module.exports = config;
