import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { v4 as uuid } from "uuid"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import Style from "./navDocAccordion.module.scss"

const NavDocAccordion = ({ isOpen, category, title }) => (
  <StaticQuery
    query={graphql`
      {
        allMdx(sort: { fields: frontmatter___sort, order: ASC }) {
          edges {
            node {
              frontmatter {
                category
                path
                title
                navDocTitle
                sort
              }
            }
          }
        }
      }
    `}
    render={data => {
      let itemID = uuid()
      return (
        <Accordion
          className={Style.accordion}
          allowMultipleExpanded
          allowZeroExpanded
          preExpanded={[isOpen ? itemID : ""]}
        >
          <AccordionItem uuid={itemID} className={Style.accordion__item}>
            <AccordionItemHeading
              className={Style.accordion__heading}
              aria-level="4"
            >
              <AccordionItemButton className={Style.accordion__button}>
                {title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={Style.accordion__panel}>
              {data.allMdx.edges
                .filter(({ node }) => node.frontmatter.category === category)
                .map(({ node }) => {
                  return (
                    <ul key={uuid()}>
                      <Link
                        to={node.frontmatter.path}
                        className={Style.Accordionlink}
                      >
                        <li key={uuid()}>{node.frontmatter.navDocTitle}</li>
                      </Link>
                    </ul>
                  )
                })}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      )
    }}
  />
)

export default NavDocAccordion
