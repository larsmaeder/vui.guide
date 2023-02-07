import * as React from "react";
import { graphql } from "gatsby";
import PagesTemplate from "../templates/pages";
import { GridItem } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { CookieConsent } from "../components";
import { Wrapper } from "../layout";

const Index = ({ data, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const [cookies, setCookie, removeCookie] = useCookies(["consent", "_ga"]);
  return (
    <PagesTemplate crumbs={crumbs} url={currentUrl}>
      <Wrapper
        grid
        as="section"
        minH={{ base: "calc(100vh - 479px)", md: "calc(100vh - 591px)" }}
      >
        <GridItem colSpan={3}>
          <CookieConsent {...{ cookies, setCookie, removeCookie }} />
        </GridItem>
      </Wrapper>
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
