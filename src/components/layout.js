import React from "react"
import Header from "./header"

const Layout = ({ children }) => (

  <>
    <div class="site-title">
      <Header siteTitle="Bible Before Bread" />
    </div>

    <div>
      <main>{children}</main>
    </div>
  </>
)

export default Layout
