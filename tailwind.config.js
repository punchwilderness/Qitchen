/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8.5xl": "110px",
      },
      borderColor: {
        lightBlack: "#3e3f40",
        lighterBlack: "#1e1f1f",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundColor: {
        lighterBlack: "#1e1f1f",
      },
      height: {
        6.5: "26px",
      },
      transitionDuration: {
        400: "400ms",
      },
      top: {
        1.5: "6px",
      },
    },
  },
  plugins: [],
};
