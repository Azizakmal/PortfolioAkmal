/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        "big": "30rem",
        "heig": "10rem",
        "myleft": "50px"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans - serif']
    }
  },
  plugins: [],
}
