/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'default-bg': "url('/bg.jpg')"
			}
		}
	},
	plugins: [
    require('tailwind-scrollbar'),
  ]
};
