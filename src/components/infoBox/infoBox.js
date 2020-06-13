import React from "react"
import { Link } from "gatsby"
import { MdInfo } from "react-icons/md"

import Style from "./infoBox.module.scss"

const InfoBox = ({ children, link, to }) => {
  return (
    <div className={Style.infoBox_Wrapper}>
      <MdInfo className={Style.infoBox_Svg} />
      <p className={Style.infoBox_Text}>{children}</p>
      {link === undefined || to === undefined ? null : (
        <Link className={Style.infoBox_Link} to={to}>
          {link}
        </Link>
      )}
    </div>
  )
}

export default InfoBox
