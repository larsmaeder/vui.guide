module.exports = {
  siteMetadata: {
    title: `Voice User Interface Guide`,
    short_title: `VUI Guide`,
    description: `A living style guide or pattern library for voice user interface design.`,
    author: `Lars Mäder`,
    siteUrl: "https://www.vui.guide",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', crawlDelay: 10 }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docImages`,
        path: `${__dirname}/docs/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbSeparator: "/",
        crumbLabelUpdates: [
          {
            pathname: "/docs",
            crumbLabel: "Docs",
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
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static/media`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              removeAccents: true,
              maintainCase: false,
              icon: `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 4.5C7 4.77614 6.77614 5 6.5 5H4C2.34315 5 1 6.34315 1 8C1 9.65685 2.34315 11 4 11H6.5C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H4C1.79086 12 0 10.2091 0 8C0 5.79086 1.79086 4 4 4H6.5C6.77614 4 7 4.22386 7 4.5Z" fill="currentColor"/><path d="M9.5 5C9.22386 5 9 4.77614 9 4.5C9 4.22386 9.22386 4 9.5 4H12C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12H9.5C9.22386 12 9 11.7761 9 11.5C9 11.2239 9.22386 11 9.5 11H12C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5H9.5Z" fill="currentColor"/><path d="M5.5 7.5C5.22386 7.5 5 7.72386 5 8C5 8.27614 5.22386 8.5 5.5 8.5H10.5C10.7761 8.5 11 8.27614 11 8C11 7.72386 10.7761 7.5 10.5 7.5H5.5Z" fill="currentColor"/></svg>`,
            },
          },
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 818,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: `#f6f7f7`,
              withWebp: true,
              showCaptions: false,
              wrapperStyle: `margin-bottom: 2.25rem;`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Voice User Interface Guide`,
        short_name: `VUI Guide`,
        description: `A living style guide or pattern library for voice user interface design.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#8800ca`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`, // Spec: https://w3c.github.io/manifest/#icon-masks; Check here: https://maskable.app/editor
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `400i`, `700`, `700i`, `900`],
          },
          {
            family: `Roboto Mono`,
            variants: [`400`],
          },
          {
            family: `EB Garamond`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require(`postcss-pxtorem`)({
            mediaQuery: false, // Ignore media queries
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            selectorBlackList: [`html`], // Ignore pixels used for html
            unitPrecision: 4, // Round rem units to 4 digits
          }),
          require(`postcss-preset-env`)({
            stage: 3, // More info about stages: https://cssdb.org/#staging-process
          }),
          require(`cssnano`)(), // Minify CSS
          require(`postcss-typography`)(), // Minify CSS
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        dictionary: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789",
        enableOnDevelopment: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"], // makes sure that the offline plugin will cache everything
        },
      },
    },
  ],
}
