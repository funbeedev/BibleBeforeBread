import React from "react"
import Header from "./header"

const Layout = ({ children }) => (

  <div>
    <Header siteTitle="Bible Before Bread" />
    <main>{children}</main>
  </div>
)

export default Layout
