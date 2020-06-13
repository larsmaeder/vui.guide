import React from "react"
import Layout from "../templates/layout-page"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactPlayer from "react-player/lazy"
import BackgroundImage from "gatsby-background-image"

import videoHero from "../images/184_0_6262a859-1233-4652-be6b-1d07b6197a35-900a73dd-0842-4e13-a3b9-39ea7a4eceef.webm"

import Style from "./index.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contribute: file(relativePath: { eq: "contribute.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 384) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      resources: file(relativePath: { eq: "resources.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 384) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={Style.hero}>
        <div className={Style.contentWrapper}>
          <div className={Style.content}>
            <h1>Voice User Interface Guide</h1>
            <p>
              This application is a living style guide or pattern library for
              voice user interface design, created with an open source mind. No
              matter your level of language, development or design expertise,
              there are ways to help contribute to the Voice User Interface
              Guide.
            </p>
            <Link className={Style.primaryButton} to="/docs">
              Get started
            </Link>
          </div>
        </div>
        <div className={Style.playerWrapper}>
          <ReactPlayer
            className={Style.reactPlayer}
            width="100%"
            height="100%"
            url={videoHero}
            playing={true}
            loop={true}
            controls={false}
            volume={0}
            muted
            playsinline
          />
        </div>
      </div>
      <div className={Style.linkTree}>
        <Link to="/docs/resources" className={Style.link}>
          <div className={Style.resources}>
            <BackgroundImage
              className={Style.img}
              Tag="div"
              fluid={data.resources.childImageSharp.fluid}
            ></BackgroundImage>
            <div className={Style.text}>
              <h2>Resources</h2>
              <p>
                A collection of useful tools for designing a voice user
                interface.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contribute" className={Style.link}>
          <div className={Style.contribute}>
            <BackgroundImage
              className={Style.img}
              Tag="div"
              fluid={data.contribute.childImageSharp.fluid}
            ></BackgroundImage>
            <div className={Style.text}>
              <h2>Contribute</h2>
              <p>
                Help to improve the vui.guide – contribute now and become a part
                of the voice user interface guide.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
