import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    borderRadius: "xl",
    fontFamily: "heading",
    fontWeight: "normal",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    outline: {
      color: "gray.500",
    },
    navigation: {
      py: { base: 1, md: 4 },
      px: { base: 3, md: 6 },
      fontSize: { base: "xs", md: "sm" },
      fontWeight: "normal",
      borderRadius: "none",
      bg: "gray.800",
      color: "gray.400",
      _hover: {
        bg: "gray.700",
      },
      _disabled: {
        bg: "gray.800",
        opacity: "1",
        color: "gray.600",
        _hover: {
          bg: "gray.800 !important",
        },
      },
      _active: {
        bg: "gray.800",
      },
      "&[aria-current]": {
        bg: "gray.700",
        boxShadow:
          "inset 0px -16px 16px -16px var(--chakra-colors-purple-600), inset 0px -1px 0px 0px var(--chakra-colors-purple-600)",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
