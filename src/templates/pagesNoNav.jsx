import * as React from "react";
import { theme } from "../theme";
import { ChakraProvider, Box, GridItem } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { CookieConsent, Logo } from "../components";
import { Footer, Wrapper } from "../layout";

const PagesTemplate = ({ imageAttributions, children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CookieConsent />
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
  );
};

export default PagesTemplate;
