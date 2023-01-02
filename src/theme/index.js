// import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles as styles } from "./styles";
import { ColorStyles as colors } from "./foundations/colors";
import { FontStyles as fonts } from "./foundations/fonts";
import { FontSizesStyles as fontSizes } from "./foundations/fontSizes";
import { BreakpointStyles as breakpoints } from "./foundations/breakpoints";
import { ButtonStyles as Button } from "./components/button";
import { ToolTipStyles as Tooltip } from "./components/tooltip";
import { AlertStyles as Alert } from "./components/alert";
import { BreadcrumbStyles as Breadcrumb } from "./components/breadcrumb";
import { AccordionStyles as Accordion } from "./components/accordion";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    fontSizes,
    breakpoints,
    components: {
      Button,
      Tooltip,
      Alert,
      Breadcrumb,
      Accordion,
    },
  },
  // withProse({
  //   baseStyle: {
  //     h2: {
  //       fontSize: "9xl",
  //     },
  //   },
  // })
);

export default theme;
