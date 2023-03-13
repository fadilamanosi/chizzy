/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'clash': ['Clash Grotesk', 'sans-serif'],
      'works': ['Work Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
