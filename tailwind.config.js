/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F5F4F0",
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
    extend: {},
  },
  plugins: [],
};
