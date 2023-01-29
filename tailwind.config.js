const primaryColor = "#008db9";
const secondaryColor = "#a44a3f";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#090a0b",
      white: "#fdfdff",
      blue: {
        DEFAULT: primaryColor,
        100: "#0ac6ff",
        200: "#00bcf5",
        300: "#00ace0",
        400: "#009ccc",
        500: primaryColor,
        600: "#007da3",
        700: "#006d8f",
        800: "#005e7a",
        900: "#004e66",
      },
      orange: secondaryColor,
      gray: {
        100: "#d7d8d9",
        200: "#c4c5c6",
        300: "#b0b2b3",
        400: "#9c9fa0",
        500: "#888b8d",
        600: "#74787a",
        700: "#616567",
        800: "#4d5154",
        900: "#393e41",
      },
    },
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        "full-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
