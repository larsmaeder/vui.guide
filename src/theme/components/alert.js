import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
});

const sizes = definePartsStyle({
  // Styles for the size variations
});

const variants = definePartsStyle({
  // Styles for the visual style variations
});

const defaultProps = definePartsStyle({
  // The default `size` or `variant` values
});

export const AlertStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
