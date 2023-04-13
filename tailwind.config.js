const primaryColor = "#f15822";
const secondaryColor = "#f99f1c";
const tertiaryColor = "#616e7d";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#090a0c",
      white: "#f3f5f6",
      orange: {
        DEFAULT: primaryColor,
        100: "#f58c66",
        500: primaryColor,
      },
      yellow: secondaryColor,
      gray: {
        100: "#dce0e4",
        200: "#c5ccd3",
        300: "#bac1ca",
        400: "#97a2af",
        500: "#8c98a6",
        600: "#758495",
        700: tertiaryColor,
        800: "#47515c",
        900: "#3e4751",
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
