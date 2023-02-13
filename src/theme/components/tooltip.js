import { defineStyleConfig } from "@chakra-ui/react";
import { cssVar } from "@chakra-ui/theme-tools";
const $arrowBg = cssVar("popper-arrow-bg");

export const ToolTipStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    [$arrowBg.variable]: "colors.gray.800",
    fontFamily: "heading",
    fontSize: "xs",
    bg: "gray.800",
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
