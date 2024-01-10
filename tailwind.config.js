/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      white: "#FFFFFF",
      yellow: "#FFFF92",
      blue: "#5867B6",
      purple: "5867B6",
      main: "#0A0C13",
    },
    backgroundImage: {
      markus2004: "url('./assets/aa.svg')",
    },
    fontFamily: {
      ptsans: ["PT Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    content: {
      evolvetext: 'url("./assets/EvolveText.png")',
      mainimage: "url('./assets/bg.svg')",
      hvector: 'url("./assets/horizontalvector.svg")',
      vvector: 'url("./assets/verticalvector.svg")',
      v5: "url('.assets/verticalv5.png')",
    },
  },
  screens: {
    s: "320px",
    xs: "480px",
    ss: "600px",
    sm: "768px",
    md: "1060px",
    xl: "1280px",
    xxl: "1520px",
  },
};
export const plugins = [];
