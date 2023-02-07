import { listAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(listAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
  container: {
    my: [3, null, 4, null, 5, null],
    marginInlineStart: [
      "var(--chakra-fontSizes-md)",
      null,
      "var(--chakra-fontSizes-lg)",
      null,
      "var(--chakra-fontSizes-xl)",
      null,
    ],
  },
  item: {
    fontSize: ["md", null, "lg", null, "xl", null],
    lineHeight: "1.6",
  },
  icon: {},
});

const sizes = definePartsStyle({
  // Styles for the size variations
});

const variants = definePartsStyle({
  attr: {
    container: {
      marginInlineStart: 0,
      my: 0,
    },
  },
  // Styles for the visual style variations
});

const defaultProps = definePartsStyle({
  // The default `size` or `variant` values
});

export const ListStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
