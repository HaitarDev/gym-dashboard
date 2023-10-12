/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      backgroundImage: {
        background:
          "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgb(1 0 46) 0%, rgb(0 4 98) 100%);",
      },
    },
  },
  plugins: [],
};
