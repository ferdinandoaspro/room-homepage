/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/*.{js,ts,jsx,tsx}",
      "./src/components/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)"
      },
      fontFamily: {
        "league-spartan": "'League Spartan', sans-serif",
      }
    },
  },
  plugins: [],
}

