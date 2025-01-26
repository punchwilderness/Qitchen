/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "820px",
      lg: "1220px",
      xl: "1550px",
    },
    extend: {
      textColor: {
        gold: "#CFBE91",
      },
      fontSize: {
        "8.5xl": "110px",
      },
      fontFamily: {
        Forum: "Forum",
      },
      borderColor: {
        lightBlack: "#3e3f40",
        lighterBlack: "#1e1f1f",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundColor: {
        lightBlack: "#131414",
        lighterBlack: "#1e1f1f",
        cream: "#EFE7D2",
        darkCream: "#CFBE91",
      },
      height: {
        6.5: "26px",
        120: "41rem",
        "3/10": "30%",
        "3/12": "32%",
        "50vh": "50vh",
        "92vh": "92vh",
        "94vh": "94vh",
        "95vh": "95vh",
        "96vh": "96vh",
        "108vh": "108vh",
      },
      maxHeight: {
        86: "21rem",
        100: "31rem",
        120: "41rem",
        "50vh": "50vh",
        "92vh": "92vh",
        "96vh": "96vh",
      },
      minHeight: {
        "92vh": "92vh",
      },
      transitionDuration: {
        400: "400ms",
      },
      top: {
        1.5: "6px",
      },
      width: {
        120: "47rem",
        "110vh": "110vh",
      },
      maxWidth: {
        "1/2": "50%",
        86: "22rem",
        90: "23rem",
      },
      brightness: {
        20: "0.2",
      },
      spacing: {
        "1/5": "20%",
        "1/10": "10%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
