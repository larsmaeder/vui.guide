import * as React from "react";
import PagesTemplate from "../templates/pages";
import { GridItem, Box } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { CookieConsent } from "../components";

const Index = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const [cookies, setCookie, removeCookie] = useCookies(["consent", "_ga"]);
  return (
    <PagesTemplate crumbs={crumbs}>
      <GridItem colSpan={3}>
        <Box as="main">
          <CookieConsent {...{ cookies, setCookie, removeCookie }} />
        </Box>
      </GridItem>
    </PagesTemplate>
  );
};

export default Index;
