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
  variants: {
    docs: {
      fontSize: "sm",
      color: "gray.500",
      borderLeft: "1px solid",
      borderLeftColor: "gray.200",
      px: 3,
      py: 2,
      _hover: { borderLeftColor: "purple.500" },
      "&[aria-current]": {
        borderLeftColor: "purple.500",
        borderLeft: "2px solid",
        color: "purple.500",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
