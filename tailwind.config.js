/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      fontFamily: {
        madimi: ["Madimi One"],
        poppin: ["Poppins"],
      },
    },
  },
  plugins: [],
};
