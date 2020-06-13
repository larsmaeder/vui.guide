import React from "react"

import Layout from "../templates/layout-page"
import SEO from "../components/seo"

import Style from "./404.module.scss"

const PageNotFound = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <div className={Style.notFound}>
      <h1>404: Page not found</h1>
      <p>You just hit a route that doesn’t exist... the sadness :(</p>
    </div>
  </Layout>
)

export default PageNotFound
