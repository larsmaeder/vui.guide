import React from "react"
import { MdOpenInNew } from "react-icons/md"

import Style from "./checkbox.module.scss"

const Checkbox = ({ children, title, desc }) => (
  <div className={Style.checkbox}>
    <form>
      <label className={Style.label}>
        <input className={Style.input} type="checkbox" />
        <span className={Style.wrapper}>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{title}</span>
      </label>
    </form>
    {children === undefined ? null : (
      <div className={Style.helpWrapper}>
        <div className={Style.topWrapper}>
          {desc}
        </div>
        <div className={Style.bottomWrapper}>
          <span className={Style.svg}>
            <MdOpenInNew />
          </span>
          <span className={Style.children}>{children}</span>
        </div>
      </div>
    )}
  </div>
)

export default Checkbox
