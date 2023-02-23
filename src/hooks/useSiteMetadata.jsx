import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          shortTitle
          siteUrl
          description
          author
          lang
          icon
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
