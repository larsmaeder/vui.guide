import { defineStyleConfig } from "@chakra-ui/react";

export const SkipLinkStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "normal",
    _focusVisible: {
      bg: "blue.50",
    },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
