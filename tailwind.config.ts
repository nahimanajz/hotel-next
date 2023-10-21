/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current:'currentColor',
        primary: "#00cba9",
        dark: "#333",
        secondary: "#fef9c3"
      }
    },
  },
  plugins: [],
};