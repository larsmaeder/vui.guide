import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    borderRadius: "xl",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    outline: {
      color: "gray.500",
    },
    navigation: {
      py: 4,
      px: 6,
      fontSize: "sm",
      fontWeight: "400",
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
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
