/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				darkBg: "#000000",
				darkCard: "#1a1a1a",
				darkText: "#ffffff",
				lightText: "#cccccc",
				highlightOrange: "#ffa500", // Matches the orange in the screenshot
				footerBorder: "#333333",
				// New: Adjusting for specific screenshot colors if needed
				instacreditOrange: "#FF6F00", // A slightly brighter orange for the logo/button
				grayLink: "#A0A0A0", // For the navigation links
				blackFooter: "#000000", // Footer background if it's pure black
				darkerGray: "#151515", // For the background of store buttons
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"], // Or 'Roboto', 'Poppins', etc.
			},
		},
	},
	plugins: [],
};
