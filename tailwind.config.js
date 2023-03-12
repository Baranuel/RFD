/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F5F4F0",
      backgroundDark: "#EEEAE4",
      secondaryDark: "#5E6E63",
      secondaryLight: "#949c94",
      primaryDark: "#a67875",
      primaryLight: "#b08c7a",
      accentDark: "#e5ba5c",
      accentLight: "#e0c487",
      customBlack: "#1a1a1a",
    },
    fontFamily: {
      p22: ["p22-underground-pc", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
