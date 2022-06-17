const { fontFamily } = require('tailwindcss/defaultTheme')
const colorStyles = require('./color-styles')
const { pxToRem } = require('./helpers')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
