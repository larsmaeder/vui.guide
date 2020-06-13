import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/vuiLogo.svg"

import Style from "./header.module.scss"

const Header = () => (
  <header className={Style.header}>
    <div className={Style.logoWrapper}>
      <Link to="/" aria-label="Go to home">
        <Logo className={Style.logo} />
      </Link>
    </div>
    <div className={Style.navWrapper}>
      <nav className={Style.nav}>
        <ul>
          <li>
            <Link to="/docs/" aria-label="Read the VUI Design Guidelines">
              Docs
            </Link>
          </li>
          <li>
            <Link
              to="/contribute/"
              aria-label="Read how to contribute to the voice user interface guide"
            >
              Contribute
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
