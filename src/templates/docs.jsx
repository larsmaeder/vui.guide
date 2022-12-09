import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

const shortcodes = { Link };

const DocsTemplate = ({ data: { mdx }, children }) => {
  return (
    <main>
      <h1>{mdx.frontmatter.title}</h1>
      <p>{mdx.fields.timeToRead.text}</p>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </main>
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
`

export default DocsTemplate;
