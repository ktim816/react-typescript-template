const { pxToRem, addPrefixObj } = require('../helpers')

module.exports = addPrefixObj({
  '2xs': [
    pxToRem(16),
    {
      fontWeight: 400,
      lineHeight: pxToRem(20),
    },
  ],
  xs: [
    pxToRem(20),
    {
      fontWeight: 400,
      lineHeight: pxToRem(26),
    },
  ],
  sm: [
    pxToRem(24),
    {
      fontWeight: 400,
      lineHeight: pxToRem(28),
    },
  ],
  base: [
    pxToRem(24),
    {
      fontWeight: 400,
      lineHeight: pxToRem(24),
    },
  ],
  md: [
    pxToRem(36),
    {
      fontWeight: 400,
      lineHeight: pxToRem(42),
    },
  ],
  lg: [
    pxToRem(40),
    {
      fontWeight: 500,
      lineHeight: pxToRem(47),
    },
  ],
  xl: [
    pxToRem(60),
    {
      fontWeight: 400,
      lineHeight: pxToRem(28),
    },
  ],
  '2xl': [
    pxToRem(64),
    {
      fontWeight: 500,
      lineHeight: pxToRem(58),
    },
  ],
})('desktop')
