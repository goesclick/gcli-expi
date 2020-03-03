import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const GlobalNavigationMenu = ({ siteTitle }) => (
  <header>
    <nav className="menu site-navigation traditional">
      <h1 className="site-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </nav>
  </header>
)

GlobalNavigationMenu.propTypes = {
  siteTitle: PropTypes.string,
}

GlobalNavigationMenu.defaultProps = {
  siteTitle: ``,
}

export default GlobalNavigationMenu
