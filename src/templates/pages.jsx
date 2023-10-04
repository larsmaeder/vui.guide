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
import { Logo, Navigation, CopyURL, CookieConsent } from "../components";
import { MdHome } from "react-icons/md";
import { Footer, Wrapper } from "../layout";
import pages from "../data/mainNavigation.json";

const PagesTemplate = ({
  data,
  currentUrl,
  crumbs,
  imageAttributions,
  children,
}) => {
  let siteUrl = data.site.siteMetadata.siteUrl + "/";
  return (
    <ChakraProvider theme={theme}>
      {currentUrl !== siteUrl && <CookieConsent />}
      <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation crumbs={crumbs} pages={pages} />
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
                colorScheme="gray"
                size="md"
                as={GatsbyLink}
                to="/"
                variant="outline"
              />
            </Tooltip>
            <CopyURL url={currentUrl} standalone />
          </Stack>
        </GridItem>
      </Wrapper>
      <SkipNavContent />
      <Box as="main">{children}</Box>
      <Footer imageAttributions={imageAttributions} />
    </ChakraProvider>
  );
};

export default PagesTemplate;
