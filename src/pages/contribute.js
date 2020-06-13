import React from "react"
import Layout from "../templates/layout-page"
import SEO from "../components/seo"

import Style from "./contribute.module.scss"

export default () => (
  <Layout>
    <SEO title="Contribute" />
    <div className={Style.wrapper}>
      <h1>Contributing to vui.guide</h1>
      <h2>Thanks for being interested in contributing!</h2>
      <p>
        All contributions are welcome, including issues, new docs as well as
        updates and tweaks. vui.guide is powered with{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby.js
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        . If you are familiar React and Github you’re ready to go.
      </p>
      <h3>Github repository</h3>
      <p>
        See the official vui.guide repository for more details on how to
        contribute as a designer, writer or developer.
      </p>
      <p>
        <a
          href="https://github.com/larsmaeder/vui.guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the Github repository
        </a>
      </p>
    </div>
  </Layout>
)
