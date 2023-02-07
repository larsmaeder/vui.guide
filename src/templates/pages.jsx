import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { theme, pageGutter, pageWidth } from "../theme";
import {
  ChakraProvider,
  Flex,
  Box,
  Stack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo, Navigation, CopyURL } from "../components";
import { CookiesProvider } from "react-cookie";
import { MdHome } from "react-icons/md";
import { Footer } from "../layout";

const PagesTemplate = ({ url, crumbs, attr, children }) => {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation crumbs={crumbs} />
        <Flex justify="center" paddingX={pageGutter}>
          <Box w={pageWidth}>
            <Box pt={{ base: 8, md: 12 }} pb={{ base: 8, md: 12 }} w="full">
              <Logo />
            </Box>
            <Box w="full">
              <Stack spacing={3} direction="row" align="center">
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
            </Box>
          </Box>
        </Flex>
        <SkipNavContent />
        <Box as="main">{children}</Box>
        <Footer attr={attr} />
      </ChakraProvider>
    </CookiesProvider>
  );
};

export default PagesTemplate;
