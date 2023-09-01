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
          DEFAUT: "#717171",
          grey_blue: "#ABBED1",
          sliver: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};
