/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "fade-border":
          "linear-gradient(to right, transparent, #000, transparent)",
      }),
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: ["before", "after"],
      boxShadow: {
        custom: "0 30px 40px rgba(0,0,0,.1)",
      },
      textShadow: {
        deba8f: "2px 2px #deba8f",
      },
      colors: {
        "dark-purple": "#131324",
        "soft-gray": "#2D2D30",
        "black-gray": "#3c3c3c",
        "light-gray": "#b1b1b4", // drugi izbor svetlije boje
        beige: "#E8E5C8",
        gold: "#d3c6a0",
        darkgrey: "#1d1e22",
        // #d3c6a0
        bordergrey: "#454749d9",
        "gold-2": "#E7BB41",
        bgnew: "rgb(27, 28, 31)",
        borders: "#66514b",
        "custom-black": "#0a0b0d",
        "custom-darkgrey": "#1d1e22",
        "custom-gold": "#d4af37",
        browno: "#deba8f",
        // decorativeText: "#917851",
        decorativeText: "#af9e83",
        lightBeige: "#d5b296",
      },
      borderRadius: {
        large: "2rem",
      },
      boxShadow: {
        custom: "0 0 8px rgba(128, 90, 0, 0.5)",
      },
    },
    screens: {
      xsm: "375px",
      "3xl": "1920px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
