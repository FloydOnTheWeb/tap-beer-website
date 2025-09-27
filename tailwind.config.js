/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beer-gold": "#eebb4d",
        "beer-orange": "#e78200",
        "beer-dark": "#1f2b33",
        "beer-light": "#ffe78f",
        "beer-cream": "#fecb89",
        "beer-blue": "#b8daff",
        "beer-gray": "#919ea9",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
