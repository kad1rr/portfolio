/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#121212",
        secondryBackground: "#101010",
      },
      borderRadius: {
        smooth: '200px'
      }
    },
  },
  plugins: [],
};
