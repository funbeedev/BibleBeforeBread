import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <div class="site-title">
      <Header />
    </div>

    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
