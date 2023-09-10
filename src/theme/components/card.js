import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
  container: {},
  header: {},
  body: {},
  footer: {},
});

const sizes = definePartsStyle({
  // Styles for the size variations
});

const variants = definePartsStyle({
  vui: {
    container: {
      backgroundColor: "whiteAlpha.400",
      boxShadow: "lg",
    },
    header: {},
    body: {},
    footer: {},
  },
  // Styles for the visual style variations
});

const defaultProps = definePartsStyle({
  // The default `size` or `variant` values
});

export const CardStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
