const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.sky, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.stone,
			trueGray: colors.neutral,
			gray: colors.gray,
			blueGray: colors.slate,
			coolGray: colors.gray
		},
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fira: ['"Fira Sans"', 'Helvetica', 'sans-serif'],
				lato: ['Lato', 'Helvetica', 'sans-serif']
			}
		}
	},
	plugins: []
};
