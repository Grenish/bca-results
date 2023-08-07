/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'richBlack': '#0C1821',
        'oxBlue': '#1B2A41',
        'charcoal': '#324A5F',
        'lavender': '#CCC9DC',
      }
    },
  },
  plugins: [],
}

