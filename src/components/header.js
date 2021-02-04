import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
  <header>
      <h1>
        <Link style={{ color:`black`, textDecoration:`none` }} to="/">
          {siteTitle}
        </Link>
      </h1>
  </header>
)

export default Header
