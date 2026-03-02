/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["var(--font-oxanium)", "sans-serif"],
      },
      colors: {
        brand: "#db7107",
      },
    },
  },
  plugins: [],
}