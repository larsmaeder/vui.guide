/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "vui.guide",
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: "Home",
        // exclude: optional, include this array to exclude paths you don't want to generate breadcrumbs for (see below for details).
        exclude: [
          "**/dev-404-page/**",
          "**/404/**",
          "**/404.html",
          "**/offline-plugin-app-shell-fallback/**",
        ],
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: "/docs",
            crumbLabel: "Guide",
          },
          {
            pathname: "/contribute",
            crumbLabel: "Contribute",
          },
          {
            pathname: "/docs/fundamentals",
            crumbLabel: "Fundamentals",
          },
          {
            pathname: "/docs/behaviour",
            crumbLabel: "Behaviour",
          },
          {
            pathname: "/docs/design-patterns",
            crumbLabel: "Design patterns",
          },
          {
            pathname: "/docs/resources",
            crumbLabel: "Resources",
          },
          {
            pathname: "/docs/resources/checklist",
            crumbLabel: "Checklist",
          },
        ],
        // trailingSlashes: optional, will add trailing slashes to the end of crumb pathnames. default is false
        trailingSlashes: true,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "INSERT-TRACKING-CODE-HERE",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              withWebp: true,
              showCaptions: ["alt"],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `48`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              removeAccents: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imagesDocs`,
        path: `./docs/docs/images/`,
      },
      __key: "imagesDocs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./docs/docs/",
      },
      __key: "docs",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
};
