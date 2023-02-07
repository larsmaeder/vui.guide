import { defineStyleConfig } from "@chakra-ui/react";

export const LinkStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontFamily: "heading",
    color: "blue.500",
    fontSize: ["md", null, "lg", null, "xl", null],
    lineHeight: "1.4",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
