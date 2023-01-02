import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
  root: {},
  container: {
    border: "none",
  },
  button: {
    borderRadius: 12,
    w: "auto",
    py: 2,
    px: 4,
    _hover: {
      bg: "gray.100",
    },
    _expanded: {
      bg: "gray.100",
    },
  },
  panel: {
    borderLeft: 1,
    borderColor: "gray.200",
    borderStyle: "solid",
    marginLeft: 4,
    my: 4,
    px: 4,
    py: 4,
  },
  icon: {},
});

const sizes = defineMultiStyleConfig({
  // Styles for the size variations
});

const variants = defineMultiStyleConfig({
  // Styles for the visual style variations
});

const defaultProps = defineMultiStyleConfig({
  // The default `size` or `variant` values
});

export const AccordionStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
