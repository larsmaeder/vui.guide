import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles as styles } from "./styles";
import { ColorStyles as colors } from "./foundations/colors";
import { FontStyles as fonts } from "./foundations/fonts";
import { IconButtonStyles as IconButton } from "./components/iconButton";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components: {
      Button: IconButton,
    },
  },
  withProse()
);

export default theme;
