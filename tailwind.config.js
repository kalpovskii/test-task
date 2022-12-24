/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lg': {'max': '1024px' },
      'md': {'max': '768px' },
      'sm': {'max': '576px' },
      'xs': {'max': '320px' },
    },
    container: {
      padding: "20px",
      center: true
    },
    extend: {},
  },
  plugins: [],
};
