import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Card from "../components/card/card"
import InfoBox from "../components/infoBox/infoBox"
import NavToc from "../components/navToc/navToc"
import NavDoc from "../components/navDoc/navDoc"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Checkbox from "../components/checkbox/checkbox"
import SEO from "../components/seo"

import Style from "./layout-docs.module.scss"

const shortcodes = {
  Link,
  Checkbox,
  Card,
  InfoBox,
}

export default ({
  data: { mdx },
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <Header />
      <div className={Style.mainContent}>
        <NavDoc currentCategory={mdx.frontmatter.category} />
        <div className={Style.contentWrapper}>
          <main className={Style.content}>
            <div
              className={
                mdx.frontmatter.toc ? Style.topWrapper : Style.topWrapperSmall
              }
            >
              <div className={Style.top}>
                <Breadcrumb
                  crumbs={crumbs}
                  crumbLabel={mdx.frontmatter.title}
                />
                <h1>{mdx.frontmatter.navDocTitle}</h1>
              </div>
            </div>
            <div
              className={
                mdx.frontmatter.toc
                  ? Style.bottomWrapper
                  : Style.bottomWrapperSmall
              }
            >
              <div className={Style.bottom}>
                <div className={Style.body}>
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                  </MDXProvider>
                </div>
                {mdx.frontmatter.toc ? (
                  <div className={Style.tocWrapper}>
                    <NavToc toc={mdx.tableOfContents} />
                  </div>
                ) : null}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query fetchMdx($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents(maxDepth: 2)
      frontmatter {
        category
        title
        navDocTitle
        toc
      }
    }
  }
`
