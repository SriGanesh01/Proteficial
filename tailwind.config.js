/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Alata': ['Alata', 'sans-serif'],
        'Actor': ['Actor', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

