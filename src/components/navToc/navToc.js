import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ScrollOpacity from "../scrollOpacity/scrollOpacity"
import { v4 as uuid } from "uuid"

import Style from "./navToc.module.scss"

const NavToc = ({ toc: { items } }) => {
  const umlauts = value => {
    value = value.toLowerCase()
    value = value.replace(/ä/g, "a")
    value = value.replace(/ö/g, "o")
    value = value.replace(/ü/g, "u")
    value = value.replace(/ß/g, "ss")
    value = value.replace(/\./g, "")
    value = value.replace(/,/g, "")
    value = value.replace(/\(/g, "")
    value = value.replace(/\)/g, "")
    return value
  }
  return (
    <nav className={Style.navWrapper}>
      <ScrollOpacity>
        <h3 className={Style.navTitle}>Table of contents</h3>
        <ol>
          {items.map(i => (
            <li className={Style.li} key={uuid()}>
              <AnchorLink
                offset="88"
                className={Style.tocLink}
                href={umlauts(i.url)}
              >
                {i.title}
              </AnchorLink>
            </li>
          ))}
        </ol>
      </ScrollOpacity>
    </nav>
  )
}

export default NavToc
