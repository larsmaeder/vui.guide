import React from "react"

import Style from "./scrollOpacity.module.scss"

class ScrollOpacity extends React.Component {
  state = {
    isScrolled: false,
  }
  changeOpacity = () => {
    if (window.scrollY >= 240) {
      this.setState({
        isScrolled: true,
      })
    } else {
      this.setState({
        isScrolled: false,
      })
    }
  }
  async componentDidMount() {
    window.addEventListener("scroll", this.changeOpacity)
  }
  async componentWillUnmount() {
    window.removeEventListener("scroll", this.changeOpacity)
  }
  render() {
    const opacity = this.state.isScrolled
    return (
      <div
        className={
          opacity
            ? Style.opacity + " " + Style.opOff
            : Style.opacity + " " + Style.opOn
        }
      >
        {this.props.children}
      </div>
    )
  }
}

export default ScrollOpacity
