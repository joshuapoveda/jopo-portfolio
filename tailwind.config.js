/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        green: "#07691b",
        peach: "#fdeeed",
        brown: "#210902",
        teal: "#42d7eb",
      },
    },
  },
};
