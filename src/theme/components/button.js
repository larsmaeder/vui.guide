import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    sundial: {
      borderRadius: "full",
      background: "sundial.100",
      height: "40px",
      width: "40px",
      color: "yellow.400",
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
