/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        bellefair: ["bellefair", "sans-serif"],
      },
      colors: {
        "space-black": "#0B0D17",
        "space-gray": "#D0D6F9",
      },
      backgroundImage: {
        homeMobile: "url('../assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
