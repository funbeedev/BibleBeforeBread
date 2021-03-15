import React from "react"
import { Link } from "gatsby"
import logo from "../../static/img/logo-black.png"

const Header = () => (
  
  <header>
      <h1>
        <Link style={{ color:`black`, textDecoration:`none` }} to="/">
          <img src={logo} className='home-logo' alt="Logo" />
        </Link>
      </h1>
  </header>
)

export default Header
