import { defineStyleConfig } from "@chakra-ui/react";

export const HeadingStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {
    "4xl": {
      fontSize: ["5xl", null, "6xl", null, "7xl", null],
      lineHeight: "1.25",
      letterSpacing: "tight",
      mt: [20, null, 24, null, 28, null],
      mb: [9, null, 10, null, 12, null],
    },
    "3xl": {
      fontSize: ["4xl", null, "5xl", null, "6xl", null],
      lineHeight: "1.25",
      letterSpacing: "tight",
      mt: [16, null, 20, null, 24, null],
      mb: [8, null, 9, null, 10, null],
    },
    "2xl": {
      fontSize: ["3xl", null, "4xl", null, "5xl", null],
      lineHeight: "1.25",
      letterSpacing: "tight",
      mt: [14, null, 16, null, 20, null],
      mb: [7, null, 8, null, 9, null],
    },
    xl: {
      fontSize: ["2xl", null, "3xl", null, "4xl", null],
      lineHeight: "1.25",
      letterSpacing: "tight",
      mt: [12, null, 14, null, 16, null],
      mb: [6, null, 7, null, 8, null],
    },
    lg: {
      fontSize: ["xl", null, "2xl", null, "3xl", null],
      lineHeight: "1.25",
      letterSpacing: "tight",
      mt: [10, null, 12, null, 14, null],
      mb: [5, null, 6, null, 7, null],
    },
    md: {
      fontSize: "lg",
      lineHeight: "1.35",
      letterSpacing: "normal",
      mt: 12,
      mb: 6,
    },
    sm: {
      fontSize: "md",
      lineHeight: "1.35",
      letterSpacing: "normal",
      mt: 10,
      mb: 5,
    },
    xs: {
      fontSize: "sm",
      lineHeight: "1.35",
      letterSpacing: "normal",
      mt: 8,
      mb: 4,
    },
  },
  // Styles for the visual style variations
  variants: {
    runner: {
      textTransform: "uppercase",
      fontWeight: "normal",
      letterSpacing: "wide",
      fontSize: ["xs", null, "sm", null, null, null],
      mt: 0,
      mb: 2,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
