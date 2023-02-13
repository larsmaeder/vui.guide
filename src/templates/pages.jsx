import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { theme } from "../theme";
import {
  ChakraProvider,
  Box,
  Stack,
  Tooltip,
  IconButton,
  GridItem,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo, Navigation, CopyURL } from "../components";
import { CookiesProvider } from "react-cookie";
import { MdHome } from "react-icons/md";
import { Footer, Wrapper } from "../layout";

const PagesTemplate = ({ url, crumbs, attr, children }) => {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
          <SkipNavLink>Skip to content</SkipNavLink>
          <Navigation crumbs={crumbs} />
          <GridItem colSpan={{ base: 3 }}>
            <Logo />
            <Stack
              spacing={3}
              direction="row"
              align="center"
              pt={{ base: 8, md: 12 }}
            >
              <Tooltip aria-label="Home" label="Home" placement="top-start">
                <IconButton
                  aria-label="Click to go home"
                  icon={<MdHome />}
                  color="sundial.500"
                  background="sundial.100"
                  _hover={{ background: "sundial.200 " }}
                  _active={{ background: "sundial.300 " }}
                  size="md"
                  as={GatsbyLink}
                  to="/"
                />
              </Tooltip>
              <CopyURL url={url} standalone />
            </Stack>
          </GridItem>
        </Wrapper>
        <SkipNavContent />
        <Box as="main">{children}</Box>
        <Footer attr={attr} />
      </ChakraProvider>
    </CookiesProvider>
  );
};

export default PagesTemplate;
