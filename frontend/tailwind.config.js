/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#3594e8",
        lightviolet:"#d4dbe7"
      },
      container:{
         center: true,
  padding: "2rem",

      }
    },
  },
  plugins: [],
}
