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
        homeTablet: "url('../assets/home/background-home-tablet.jpg')",
        homeDesktop: "url('../assets/home/background-home-desktop.jpg')",
        destinationMobile:
          "url('../assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('../assets/destination/background-destination-tablet.jpg')",
        destinationDesktop:
          "url('../assets/destination/background-destination-desktop.jpg')",
        crewMobile: "url('../assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('../assets/crew/background-crew-tablet.jpg')",
        crewDesktop: "url('../assets/crew/background-crew-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
