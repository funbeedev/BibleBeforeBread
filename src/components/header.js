import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
  <header>

    <div class="home-header">
      <h1>
        <Link style={{ color:`black`, textDecoration:`none` }} to="/">
          {siteTitle}
        </Link>
      </h1>
      <blockquote> "Man shall not live by bread alone, but by every word that comes from the mouth of God." - Matthew 4:4</blockquote>
    </div>

  </header>
)

export default Header
