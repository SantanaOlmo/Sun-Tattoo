/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes añadir tu rojo Sun Tattoo si quieres
        "brand-red": "#ff0000",
      }
    },
  },
  plugins: [],
}