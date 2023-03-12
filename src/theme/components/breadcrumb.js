import { breadcrumbAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);

const baseStyle = definePartsStyle({
  // Styles for the base style
  container: {
    bg: "blackAlpha.200",
    borderRadius: "xl",
    fontFamily: "heading",
    color: "gray.500",
    alignContent: "center",
    display: "flex",
    px: 3,
  },
  list: {
    fontSize: "sm",
    my: 0,
  },
  item: {},
  link: {},
  seperator: {},
  icon: {},
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

export const BreadcrumbStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
