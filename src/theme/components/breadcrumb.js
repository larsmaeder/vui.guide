import { defineStyleConfig } from "@chakra-ui/react";

export const BreadcrumbStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    container: {
      backgroundColor: "rgba(95, 73, 162, 0.1)",
      padding: 3,
      borderRadius: "xl",
      fontFamily: "heading",
      color: "gray.500"
    },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
