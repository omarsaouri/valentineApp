/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e701e7",
        "primary-content": "#ffe8ff",
        "primary-dark": "#b401b4",
        "primary-light": "#fe1dfe",

        secondary: "#e70174",
        "secondary-content": "#ffe8f3",
        "secondary-dark": "#b4015a",
        "secondary-light": "#fe1d8d",

        background: "#f4ecf4",
        foreground: "#fcfafc",
        border: "#e7d7e7",

        copy: "#301d30",
        "copy-light": "#804d7f",
        "copy-lighter": "#a970a9",

        success: "#01e701",
        warning: "#e7e701",
        error: "#e70101",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffe8e8",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
