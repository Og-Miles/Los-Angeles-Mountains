/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.png')",
        hero2: "url('/src/assets/bg.png')",
        hero3: "url('/src/assets/bg2.png')",
      },
      fontFamily: {
        lato: "lato",
        bebas: "Bebas Neue",
        oswald: "Oswald",
      },
    },
  },
  plugins: [],
};
