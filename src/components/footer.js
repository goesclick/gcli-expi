import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    &copy; {new Date().getFullYear()}
    {` `}
    <Link to="/" />
  </footer>
)

export default Footer
