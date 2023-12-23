const { fontFamily, screens } = require('tailwindcss/defaultTheme')
const colorStyles = require('./utils/color-styles')
const fontSizes = require('./utils/font-sizes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: colorStyles,
    fontSize: {
      ...fontSizes,
    },
    screens: {
      xs: '480px',
      ...screens,
    },
    extend: {
      fontFamily: {
        primary: [...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
