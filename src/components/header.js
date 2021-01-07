import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
  <header style={{ background: `purple` }}>
    <h1>
      <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header
