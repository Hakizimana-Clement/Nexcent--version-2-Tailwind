/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter,sans-serif"],
      },
      colors: {
        D_gray: {
          l_grey: "#89939E",
          DEFAUT: "#4D4D4D",
          grey_blue: "#ABBED1",
          grey: "#717171",
          sliver: "#F5F7FA",
          primary: "#4CAF4F",
          dark: "#18191F",
          dark_2: "#263238",
          white_grey: "#89939E",
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
