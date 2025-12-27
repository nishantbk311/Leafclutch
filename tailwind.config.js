/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0D3B4F",
          blue: "#0394D9",
          yellow: "#FEF7A5",
        },
      },
    },
  },
  plugins: [],
};
