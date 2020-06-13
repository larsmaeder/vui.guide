import React from "react"
import { GoMarkGithub, GoMail } from "react-icons/go";
import { MdBugReport } from "react-icons/md";


import Style from "./footer.module.scss"

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <footer className={Style.footer}>
      <p>© {currentYear} vui.guide</p>
      <a
        href="https://github.com/larsmaeder/vui.guide"
        target="_blank"
        rel="noopener noreferrer"
        className={Style.githubLogo}
        title="Github repository"
      >
        <GoMarkGithub className={Style.githubLogo} />
      </a>
      <a
        href="https://github.com/larsmaeder/vui.guide/issues"
        rel="noopener noreferrer"
        className={Style.bugLogo}
        title="Report a bug"
      >
        <MdBugReport className={Style.bugLogo} />
      </a>
      <a
        href="mailto:direct@vui.guide"
        className={Style.mailLogo}
        title="Send a direct message"
      >
        <GoMail className={Style.mailLogo} />
      </a>
    </footer>
  )
}

export default Footer
