/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        100: "#FFFDF5",
        200: "#FFFBE5",
        300: "#E8E3DA",
        400: "#6E6B67",
      },
      accent: {
        100: "#E0EFDE",
        200: "#569573",
        300: "#406C55",
      },
      neutral: {
        100: "#F8F9FA",
        200: "#DEE2E6",
        300: "#ADB5BD",
        400: "#6C757D",
        500: "#343A40",
        600: "#212529",
      },
      info: "#4A72FF",
      success: "#2CC585",
      warning: "#FFB054",
      danger: "#D65F5F",
      dark: "#000",
      light: "#fff",
    },
    fontSize: {
      sm: ["0.75rem", "1.6"], //12px
      h5: ["0.875rem", "2"], //14px
      h6: ["1rem", "1.2"], //16px
      base: ["1rem", "1.5"], //16px
      lg: ["1.25rem", "1.2"], //20px
      xl: ["1.5rem", "1.2"], //24px
      "2xl": ["1.75rem", "1.2"], //28px
      "3xl": ["2rem", "1.2"], //32px
      "4xl": ["2.5rem", "1.2"], //40px
      "5xl": ["3.25rem", "1.4"], // 52px
    },
    borderRadius: {
      0: 0,
      sm: "4px",
      lg: "12px",
      xl: "20px",
    },
    extend: {
      screens: {
        xl: "1320px",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        128: "32rem",
        144: "36rem",
      },
      boxShadow: {
        primary: "0px 2px 8px 0px #6E6B6714",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(359.16deg, #212529 0.73%, rgba(33, 37, 41, 0.05) 99.27%)",
      },
    },
    container: {
      center: true,
      padding: "12px",
      screens: {
        md: "720px",
        lg: "960px",
        xl: "1320px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
