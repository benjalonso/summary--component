/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1200px",
        bigScreen: "2000px",
      },
    },
    colors: {
      gradient1: "#7755FF",
      gradient2: "#4D21C9",
      yellow: "#FFB21E",
      blue: "#1125D6",
      green: "#00BB8F",
      red: "#FF5555",
      darkNavy: "#303B59",
      lightBlue: "#CAC9FF",
      veryLightBlue: "#ECF2FF",

    },
    fontFamily: {
      space: ["space-grotesk", "sans-serif"],
    },
    fontSize: {
      headXL: '72px',
      headL: '32px',
      headM: '24px',
      body: '18px'
    }
  },
  variants: {},
  plugins: [],
};
