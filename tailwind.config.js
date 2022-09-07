/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5eeea",
      },
      screens: {
        sm: "440px",
        md: "768px",
      },
      width: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
