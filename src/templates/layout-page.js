import React from "react"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

const LayoutPage = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutPage
