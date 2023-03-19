/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#167BBF",

					secondary: "#70696C",

					accent: "#FFC2A3",

					neutral: "#DDD8DD",

					"base-100": "#322A30",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	fontFamily: {
		nunito: ["Nunito", "sans-serif"],
	},
	theme: {},
	plugins: [require("daisyui")],
};
