import * as React from "react";
import { theme, pageGap, pageWidth } from "../theme";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Index = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation crumbs={crumbs} />
      <Flex justify="center" paddingX={pageGap}>
        <Box w={pageWidth}>
          <Box pt={12} pb={16} w="full">
            <Logo />
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem colSpan={2}>
              <Box as="main">
                <SkipNavContent />
                <Heading as="h1" size="xl" pb={6}>
                  Index
                </Heading>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
