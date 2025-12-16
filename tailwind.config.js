/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a1628",
        secondary: "#c3cdd9",
        tertiary: "#1a2332",
        "black-100": "#151d2c",
        "black-200": "#0d1621",
        "white-100": "#f3f3f3",
        "accent-red": "#dc2626",
        "accent-blue": "#2563eb",
        "red-light": "#ef4444",
        "blue-light": "#3b82f6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e2a3e",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};