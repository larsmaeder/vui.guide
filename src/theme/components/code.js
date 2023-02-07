import { defineStyleConfig } from "@chakra-ui/react";

export const CodeStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontSize: ["md", null, "lg", null, "xl", null],
    lineHeight: "1.6",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
