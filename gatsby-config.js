/**
 * @type {import('gatsby').GatsbyConfig}
 */
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.vui.guide",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
module.exports = {
  siteMetadata: {
    title: "Voice User Interface Guide",
    shortTitle: "VUI Guide",
    siteUrl,
    description:
      "VUI Guide provides an open source hodgepodge for designing voice user interfaces. It covers best practices, design patterns, and practical tips to help create effective and engaging voice-only experiences.",
    author: "Lars Mäder",
    lang: "en",
    icon: "/icon-path-vuiLogo.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JBVJ2688BG", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
            sitemap: `${siteUrl}/sitemap-index.xml`,
            host: `${siteUrl}`,
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
            pathname: "/about",
            crumbLabel: "About",
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
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Voice User Interface Guide",
        short_name: "VUI Guide",
        description:
          "VUI Guide provides an open source hodgepodge for designing voice user interfaces. It covers best practices, design patterns, and practical tips to help create effective and engaging voice-only experiences.",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#5F49A2",
        display: "minimal-ui",
        icon: "src/images/icon-path-vuiLogo.png",
        icon_options: {
          purpose: "any maskable",
        },
        cache_busting_mode: "none",
        shortcuts: [
          {
            name: "Read VUI Guide",
            url: "/docs/",
          },
          {
            name: "Learn more about the project",
            short_name: "Learn more",
            url: "/about/",
          },
          {
            name: "Share your knowledge",
            url: "/about/#write-a-blogpost",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/about/", "/docs/*"],
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
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
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "48",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesDocs",
        path: "./docs/images/",
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
        path: "./docs/",
      },
      __key: "docs",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -48,
      },
    },
  ],
};
