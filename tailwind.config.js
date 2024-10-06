/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      FontFamily:{
      inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

