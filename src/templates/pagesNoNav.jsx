import * as React from "react";
import { theme } from "../theme";
import { ChakraProvider, Box, GridItem } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo } from "../components";
import { CookiesProvider } from "react-cookie";
import { Footer, Wrapper } from "../layout";

const PagesTemplate = ({ imageAttributions, children }) => {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
          <SkipNavLink>Skip to content</SkipNavLink>
          <GridItem colSpan={{ base: 3 }}>
            <Logo />
          </GridItem>
        </Wrapper>
        <SkipNavContent />
        <Box as="main">{children}</Box>
        <Footer imageAttributions={imageAttributions} />
      </ChakraProvider>
    </CookiesProvider>
  );
};

export default PagesTemplate;
