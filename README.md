<p align="center">
  <a href="https://www.vui.guide">
    <img alt="vui.guide" src="https://raw.githubusercontent.com/larsmaeder/vui.guide/master/src/images/vuiLogo.svg" width="160" />
  </a>
</p>
<h1 align="center">
  Voice User Interface Guide
</h1>

Source code of [vui.guide](https://www.vui.guide) – a living style guide or pattern library for voice user interfaces. vui.guide is an open source application created with [gatsby.js](https://www.gatsbyjs.org/) to help designers design their own voice user interface. No matter your level of language, development or design expertise, there are ways to help contribute to the Voice User Interface Guide.


![GitHub Workflow Status](https://img.shields.io/github/workflow/status/larsmaeder/vui.guide/Gatsby%20Publish)
![GitHub issues](https://img.shields.io/github/issues/larsmaeder/vui.guide)
![GitHub contributors](https://img.shields.io/github/contributors/larsmaeder/vui.guide?color=blue)
![GitHub MIT license](https://img.shields.io/github/license/larsmaeder/vui.guide?color=blue)
![GitHub CC BY-SA 4.0 license](https://img.shields.io/badge/license-CC%20BY--SA%204.0-blue)

## 🚀 Get started

1.  **Clone vui.guide**

    Clone or download the official “vui.guide”-Repository from https://github.com/larsmaeder/vui.guide.git

    ```shell
    git clone https://github.com/larsmaeder/vui.guide.git
    ```

2.  **Install dependencies**

    Navigate into site’s directory and start it up.

    ```shell
    cd vui.guide
    npm install
    ```

3.  **Start developing**

    Navigate into site’s directory and start it up.

    ```shell
    npm start
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.

##  ⌨️ Contribute as a writer

**`/docs`**: The full documentation is written in Markdown and can be edited through the `.mdx` files inside the top-level `docs` folder.

Following frontmatter queries are defined inside a `.mdx` file:

```mdx
---
title: Behaviour of speak
navDocTitle: Behaviour of speak
slug: /docs/behaviour/behaviour-of-speak/
category: behaviour
sort: 2
toc: true
---
```

1.  **`title`**: Output as `<title>` tag and for the breadcrumb component.

2.  **`navDocTitle`**: Output as `<H1>` and navigation label.

3.  **`path`**: Output as URL slug as following `https://www.vui.guide{path}`

4.  **`category`**: Defines the page category. Is used for navigation assignment and page's location relation.

5.  **`sort`**: Used to sort navigation labels inside a category

6.  **`toc`**: `Boolean` enables/disables the table of content component

## 🤖 Local build

1.  **Start a local build**

    Navigate into site’s directory, start a build and serve the local build for local environment testing.

    ```shell
    npm run build
    npm run serve
    ```

    Gatsby serve running at: `http://localhost:9000/`

## 🔍 What's inside?

A quick look at the relevant top-level files and directories.

    .
    ├── .github
    ├── docs
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── CNAME
    ├── LICENSE
    ├── README.md
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    └── package.json

1.  **`/docs`**: this directory contains all content related files that are used inside the documentation itself.

2.  **`/src`**: this directory contains all code related files that are used on the overall vui.guide.

## 📜 License

### MIT
larsmaeder/vui.guide is licensed under the [MIT License](LICENSE).

### CC BY-SA 4.0
[![Build Status](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/)

All graphics and assets are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).