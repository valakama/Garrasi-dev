/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/hero-image.jpg')",
        'hero-Videogame': "url('./assets/hero-Videogame.jpg')",
      },
    },
  },
  plugins: [],
}

