import { withProse } from "@nikolovlazar/chakra-ui-prose";
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
import { SkipLinkStyles as SkipLink } from "./components/skipLink";
import { pageWidth, pageGap } from "./foundations/layout";

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
      SkipLink,
    },
  },
  withProse({
    baseStyle: {
      h1: {
        letterSpacing: "tight",
      },
      h2: {
        letterSpacing: "tight",
      },
      h3: {
        letterSpacing: "tight",
      },
      h4: {
        letterSpacing: "tight",
      },
      h5: {
        letterSpacing: "tight",
      },
      h6: {
        letterSpacing: "tight",
      },
      p: {
        fontSize: { base: "md", md: "lg" },
        lineHeight: { base: "7", md: "8" },
      },
    },
  })
);

export { theme, pageGap, pageWidth };