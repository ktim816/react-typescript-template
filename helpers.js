exports.pxToRem = (px) => {
  const rootFontSize = 16
  return `${px / rootFontSize}rem`
}
