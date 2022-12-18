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
            crumbLabel: "Guidelines",
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
    "gatsby-plugin-mdx",
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
  ],
};
