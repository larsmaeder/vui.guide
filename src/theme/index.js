import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles as styles } from "./styles";
import { ColorStyles as colors } from "./foundations/colors";
import { FontStyles as fonts } from "./foundations/fonts";
import { ButtonStyles as Button } from "./components/button";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components: {
      Button,
    },
  },
  withProse()
);

export default theme;
