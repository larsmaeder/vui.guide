import * as React from "react";
import { theme, pageGap, pageWidth } from "../theme";
import {
  chakra,
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo, Navigation, CookieConsent } from "../components";
import { CookiesProvider } from "react-cookie";

const Index = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation crumbs={crumbs} />
        <Flex justify="center" paddingX={pageGap}>
          <Box w={pageWidth}>
            <Box pt={12} pb={32} w="full">
              <Logo />
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={12}>
              <GridItem colSpan={3}>
                <Box as="main">
                  <SkipNavContent />
                  <chakra.div
                    color="font.100"
                    fontSize={{
                      base: "4xl",
                      sm: "5xl",
                      md: "6xl",
                      xl: "8xl",
                    }}
                  >
                    <CookieConsent />
                  </chakra.div>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </ChakraProvider>
    </CookiesProvider>
  );
};

export default Index;
