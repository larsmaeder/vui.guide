import * as React from "react";
import { theme, pageGap, pageWidth } from "../theme";
import { ChakraProvider, Grid, Flex, Box } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo, Navigation } from "../components";
import { CookiesProvider } from "react-cookie";

const PagesTemplate = ({ crumbs, children }) => {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation crumbs={crumbs} />
        <Flex justify="center" paddingX={pageGap}>
          <Box w={pageWidth}>
            <Box pt={12} pb={12} w="full">
              <Logo />
            </Box>
            <SkipNavContent />
            <Grid templateColumns="repeat(3, 1fr)" gap={12}>
              {children}
            </Grid>
          </Box>
        </Flex>
      </ChakraProvider>
    </CookiesProvider>
  );
};

export default PagesTemplate;
