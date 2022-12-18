import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import theme from "../theme";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import {
  ChakraProvider,
  Stack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import CopyURL from "../components/CopyURL";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const shortcodes = { Link };

const DocsTemplate = ({ data, children, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const CustomBreadcrumbHidden = () => {
    if (!(location.pathname === "/docs/")) {
      return (
        <CustomBreadcrumb
          crumbs={crumbs}
          crumbLabel={data.mdx.frontmatter.title}
          crumbLocationRef={location.pathname}
          hiddenCrumbs={["/"]}
        />
      );
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <Logo />
      <Stack spacing={3} direction="row" alignItems="center">
        <CopyURL currentUrl={currentUrl} />
        <CustomBreadcrumbHidden />
      </Stack>
      <Heading as="h1" size="3xl">
        {data.mdx.frontmatter.title}
      </Heading>
      <Stat>
        <StatLabel>Time to read</StatLabel>
        <StatNumber>{data.mdx.fields.timeToRead.text}</StatNumber>
      </Stat>
      <Prose>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Prose>
    </ChakraProvider>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      fields {
        timeToRead {
          minutes
          text
          time
          words
        }
      }
      frontmatter {
        category
        title
        navDocTitle
        toc
      }
    }
  }
`;

export default DocsTemplate;
