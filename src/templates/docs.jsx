import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import {
  ChakraProvider,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import theme from "../theme";
import Logo from "../components/Logo";
import CopyURL from "../components/CopyURL";

const shortcodes = { Link };

const DocsTemplate = ({ data, children, location }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  return (
    <ChakraProvider theme={theme}>
      <Logo />
      <CopyURL currentUrl={currentUrl} />
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
