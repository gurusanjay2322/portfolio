/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        Abril: ["Abril Fatface", "serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Galada: ["Galada", "cursive"],
        RockSalt: ["Rock Salt", "cursive"],
        DmSerif: ["DM Serif Display","serif"],
      },
      colors: {
        'text': '#eaf6f3',
        'background': '#030807',
        'primary': '#a6d6cf',
        'secondary': '#763663',
        'accent': '#b76961',
       },       
    },
  },
  plugins: [],
}