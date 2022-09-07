/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5eeea",
      },
      screens: {
        sm: "650px",
        md: "768px",
      },
      width: {
        100: "100%",
        50: "50%",
      },
      fontSize: { sm: "18px" },
    },
  },
  plugins: [],
};
