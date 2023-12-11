const { pxToRem, addPrefixObj } = require('../helpers')

module.exports = addPrefixObj({
  '2xs': [
    pxToRem(12),
    {
      fontWeight: 400,
      lineHeight: pxToRem(16),
    },
  ],
  xs: [
    pxToRem(14),
    {
      fontWeight: 400,
      lineHeight: pxToRem(18),
    },
  ],
  sm: [
    pxToRem(18),
    {
      fontWeight: 400,
      lineHeight: pxToRem(21),
    },
  ],
  base: [
    pxToRem(18),
    {
      fontWeight: 400,
      lineHeight: pxToRem(18),
    },
  ],
  md: [
    pxToRem(20),
    {
      fontWeight: 400,
      lineHeight: pxToRem(24),
    },
  ],
  lg: [
    pxToRem(24),
    {
      fontWeight: 400,
      lineHeight: pxToRem(28),
    },
  ],
  xl: [
    pxToRem(32),
    {
      fontWeight: 500,
      lineHeight: pxToRem(38),
    },
  ],
  '2xl': [
    pxToRem(40),
    {
      fontWeight: 500,
      lineHeight: pxToRem(40),
    },
  ],
})('tablet')
