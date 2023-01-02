import { defineStyleConfig } from "@chakra-ui/react";

export const BreadcrumbStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    container: {
      backgroundColor: "gray.200",
      borderRadius: "xl",
      fontFamily: "heading",
      color: "gray.500",
      alignContent: "center",
      display: "flex",
      px: 4,
    },
  },
  // Styles for the size variations
  sizes: {
    xs: {
      container: {
        fontSize: "xs",
        px: 3,
      },
    },
  },
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});
