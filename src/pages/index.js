import * as React from "react";
import { graphql } from "gatsby";
import PagesTemplate from "../templates/pages";
import { GridItem } from "@chakra-ui/react";
import { CookieConsent, Seo } from "../components";
import { Wrapper } from "../layout";
import { useCookieConsent } from "../hooks/useCookieConsent";

const Index = ({ data, location, pageContext }) => {
  const { setOptIn } = useCookieConsent();
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const templateProps = { crumbs, currentUrl };
  return (
    <PagesTemplate {...templateProps}>
      <Seo pathname={location.pathname} />
      <Wrapper
        grid
        as="section"
        pt={16}
        minH={{ base: "calc(100vh - 479px)", md: "calc(100vh - 591px)" }}
      >
        <GridItem colSpan={3}>
          <CookieConsent />
          <div>
            <button onClick={() => setOptIn("true")}>Accept Cookies</button>
            <button onClick={() => setOptIn("false")}>Reject Cookies</button>
          </div>
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
