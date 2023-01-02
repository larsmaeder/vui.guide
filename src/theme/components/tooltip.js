import { defineStyleConfig } from "@chakra-ui/react";

export const ToolTipStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontFamily: "heading",
    fontSize: "xs",
    background: "blackAlpha.900",
    color: "white",
    py: "2",
    px: "3",
    borderRadius: "md",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
