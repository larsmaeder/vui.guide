import Typography from "typography"

const typography = new Typography({
  title: "vui-guide-typography",
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ["Roboto", "Arial", "sans-serif"],
  bodyFontFamily: ["Roboto", "Arial", "sans-serif"],
  headerColor: "#0b2750",
  bodyColor: "#0b2750",
  headerWeight: 800,
  bodyWeight: 400,
  blockMarginBottom: 1.5,
  includeNormalize: true,
})

const { rhythm, scale } = typography

export { rhythm, scale, typography as default }

typography.injectStyles()
