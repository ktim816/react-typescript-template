const { fontFamily } = require('tailwindcss/defaultTheme')
const colorStyles = require('./utils/color-styles')
const fontSizes = require('./utils/font-sizes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: colorStyles,
    fontSize: {
      ...fontSizes.mobile,
      ...fontSizes.tablet,
      ...fontSizes.desktop,
    },
    extend: {
      screens: {
        xs: 480,
      },
      fontFamily: {
        primary: [...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
