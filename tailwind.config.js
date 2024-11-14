/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        jua: ['Jua', 'sans-serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}