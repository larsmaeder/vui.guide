import React from "react"
import { Link } from "gatsby"
import { MdArrowForward } from "react-icons/md"

import Style from "./card.module.scss"

const Card = ({ children, title, nr, to, cta }) => (
  <>
    {cta === undefined || to === undefined ? (
        <div className={Style.cardWrapper}>
          {nr === undefined ? null : (
            <div className={Style.cardTop}>
              <span className={Style.number}>{nr}</span>
            </div>
          )}
          <div className={Style.cardBottom}>
            <h2 className={Style.title}>{title}</h2>
            <p className={Style.children}>{children}</p>
          </div>
        </div>
    ) : (
      <Link to={to}>
        <div className={Style.cardWrapper}>
          <span className={Style.link}>
            <p className={Style.linkText}>{cta}</p>
            <MdArrowForward className={Style.linkSvg} />
          </span>
          {nr === undefined ? null : (
            <div className={Style.cardTop}>
              <span className={Style.number}>{nr}</span>
            </div>
          )}
          <div className={Style.cardBottom}>
            <h2 className={Style.title}>{title}</h2>
            <p className={Style.children}>{children}</p>
          </div>
        </div>
      </Link>
    )}
  </>
)

export default Card
