/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', "sans-serif"]
      },
      colors: {
        "gray": "rgba(255, 255, 255, 0.50);",
        "btn-pink": "#BF5F80",
        "btn-blue": "#6F57D8",
      },
      fontSize: {
        grayText: "12px"
      },
      screens: {
        "tablet": "1120px"
      }
    },
  },
}