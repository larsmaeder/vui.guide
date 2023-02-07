import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles as styles } from "./styles";
import { ColorStyles as colors } from "./foundations/colors";
import { FontStyles as fonts } from "./foundations/fonts";
import { FontSizesStyles as fontSizes } from "./foundations/fontSizes";
import { BreakpointStyles as breakpoints } from "./foundations/breakpoints";
import { pageWidth, pageGutter } from "./foundations/layout";
import { HeadingStyles as Heading } from "./components/heading";
import { ButtonStyles as Button } from "./components/button";
import { ToolTipStyles as Tooltip } from "./components/tooltip";
import { AlertStyles as Alert } from "./components/alert";
import { BreadcrumbStyles as Breadcrumb } from "./components/breadcrumb";
import { AccordionStyles as Accordion } from "./components/accordion";
import { SkipLinkStyles as SkipLink } from "./components/skipLink";
import { BadgeStyles as Badge } from "./components/badge";
import { LinkStyles as Link } from "./components/link";
import { ListStyles as List } from "./components/list";
import { CodeStyles as Code } from "./components/code";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    fontSizes,
    breakpoints,
    components: {
      Heading,
      Button,
      Tooltip,
      Alert,
      Breadcrumb,
      Accordion,
      SkipLink,
      Badge,
      Link,
      List,
      Code,
    },
  },
  withProse({
    baseStyle: {
      h1: {
        fontSize: ["4xl", null, "5xl", null, "6xl", null],
        lineHeight: "1.25",
        letterSpacing: "tight",
        mt: [16, null, 20, null, 24, null],
        mb: [8, null, 9, null, 10, null],
      },
      h2: {
        fontSize: ["3xl", null, "4xl", null, "5xl", null],
        lineHeight: "1.25",
        letterSpacing: "tight",
        mt: [14, null, 16, null, 20, null],
        mb: [7, null, 8, null, 9, null],
      },
      h3: {
        fontSize: ["2xl", null, "3xl", null, "4xl", null],
        lineHeight: "1.25",
        letterSpacing: "tight",
        mt: [12, null, 14, null, 16, null],
        mb: [6, null, 7, null, 8, null],
      },
      h4: {
        fontSize: ["xl", null, "2xl", null, "3xl", null],
        lineHeight: "1.25",
        letterSpacing: "tight",
        mt: [10, null, 12, null, 14, null],
        mb: [5, null, 6, null, 7, null],
      },
      h5: {
        fontSize: "lg",
        lineHeight: "1.35",
        letterSpacing: "normal",
        mt: 12,
        mb: 6,
      },
      h6: {
        fontSize: "md",
        lineHeight: "1.35",
        letterSpacing: "normal",
        mt: 10,
        mb: 5,
      },
      p: {
        fontSize: ["md", null, "lg", null, "xl", null],
        lineHeight: "1.6",
        my: [3, null, 4, null, 5, null],
      },
    },
  })
);

export { theme, pageGutter, pageWidth };
