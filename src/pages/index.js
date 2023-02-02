import * as React from "react";
import { graphql } from "gatsby";
import { pageGutter, pageWidth } from "../theme";
import PagesTemplate from "../templates/pages";
import { GridItem, Box, Grid, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { CookieConsent } from "../components";

const Index = ({ data, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const [cookies, setCookie, removeCookie] = useCookies(["consent", "_ga"]);
  return (
    <PagesTemplate crumbs={crumbs} url={currentUrl}>
      <Flex justify="center" paddingX={pageGutter} pb={32}>
        <Box w={pageWidth}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={12}
            fontSize={{ base: "md", lg: "lg", xl: "xl" }}
            lineHeight={{ base: 7, lg: 8, xl: 9 }}
          >
            <GridItem colSpan={3}>
              <Box as="main" pt={{ base: 0, md: 8 }}>
                <CookieConsent {...{ cookies, setCookie, removeCookie }} />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </PagesTemplate>
  );
};

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Index;
