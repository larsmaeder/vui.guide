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
import Logo from "../components/logo/logo";
import CopyURL from "../components/copyURL/copyURL";

const shortcodes = { Link };

const DocsTemplate = ({ data: { mdx }, children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Logo />
      <CopyURL />
      <Heading as="h1" size="3xl">
        {mdx.frontmatter.title}
      </Heading>
      <Stat>
        <StatLabel>Time to read</StatLabel>
        <StatNumber>{mdx.fields.timeToRead.text}</StatNumber>
      </Stat>
      <Prose>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Prose>
    </ChakraProvider>
  );
};

export const mdxQuery = graphql`
  query fetchMdx($id: String) {
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
