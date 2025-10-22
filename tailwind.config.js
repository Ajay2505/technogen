/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            DEFAULT: "#21214a",
            50: "#e8ecf7",
            100: "#cdd8ef",
            200: "#a1b8e3",
            300: "#6b8fd3",
            400: "#446cc2",
            500: "#26479c",
            600: "#21214a",
            700: "#172f6e",
            800: "#102153",
            900: "#0a163c",
          },
          pink: {
            DEFAULT: "#c5285e",
            50: "#fdebf1",
            100: "#fcd5e3",
            200: "#f9a9c6",
            300: "#f77da8",
            400: "#f4588f",
            500: "#e83674",
            600: "#c5285e",
            700: "#a11c4c",
            800: "#7d143a",
            900: "#590c29",
          },
        },
      },
    },
  },
  plugins: [],
};
