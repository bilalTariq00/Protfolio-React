/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f5f5dc",
        secondary: "#654321",
        tertiary: "#d3d3c5",
        "black-100": "#8B4513",
        "black-200": "#8B4513",
        "white-100": "#f3f3f3",
        customOrangeDark: '#d2b48c',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};