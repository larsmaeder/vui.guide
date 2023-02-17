import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
  root: {},
  container: {},
  button: {},
  panel: {},
  icon: {},
});

const sizes = definePartsStyle({
  // Styles for the size variations
});

const variants = definePartsStyle({
  // Styles for the visual style variations
  docs: {
    root: {
      fontFamily: "heading",
      color: "gray.500",
      display: "flex",
      flexDirection: "column",
      fontSize: "sm",
    },
    container: {
      border: "none",
      my: 1,
      display: "inline-block",
    },
    button: {
      textAlign: "left",
      fontSize: "sm",
      display: "inline-flex",
      borderRadius: 12,
      w: "auto",
      py: 2,
      px: 3,
      bg: "gray.100",
      _hover: {
        bg: "gray.100",
      },
      _expanded: {
        bg: "gray.100",
      },
    },
    panel: {
      paddingTop: 2,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 4,
    },
  },
});

const defaultProps = definePartsStyle({
  // The default `size` or `variant` values
});

export const AccordionStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
