/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lg': '1024px',

    },
    container: {
      padding: "20px",
      center: true
    },
    extend: {},
  },
  plugins: [],
};
