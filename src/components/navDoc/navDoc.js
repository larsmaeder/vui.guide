import React from "react"
import { Link } from "gatsby"
import { v4 as uuid } from "uuid"
import { MdList } from "react-icons/md"
import NavDocAccordion from "../navDocAccordion/navDocAccordion"
import ScrollOpacity from "../scrollOpacity/scrollOpacity"

import Style from "./navDoc.module.scss"

class NavDoc extends React.Component {
  state = {
    isNavVisible: true,
  }
  render() {
    const visible = this.state.isNavVisible
    return (
      <>
        <ScrollOpacity>
          <div
            className={
              visible
                ? Style.navWrapper
                : Style.navWrapper + " " + Style.mobileNav
            }
          >
            <div className={Style.navInner}>
              <nav>
                <h3 className={Style.navTitle}>Documentation</h3>
                <Link className={Style.navLink} to="/docs/">
                  Introduction
                </Link>
                {/* For every new navDocAccordion add new category in array. Order: ["mdx_category", "title_in_navDoc"] */}
                {[
                  ["fundamentals", "Fundamentals"],
                  ["behaviour", "Behaviour"],
                  ["designPatterns", "Design patterns"],
                  ["resources", "Resources"],
                ].map(item => {
                  return (
                    <NavDocAccordion
                      key={uuid()}
                      isOpen={this.props.currentCategory === item[0]}
                      category={item[0]}
                      title={item[1]}
                    />
                  )
                })}
              </nav>
            </div>
          </div>
        </ScrollOpacity>
        <button
          className={Style.navToggle}
          onClick={() => this.setState({ isNavVisible: !visible })}
        >
          <MdList className={Style.svg} />
        </button>
      </>
    )
  }
}

export default NavDoc
