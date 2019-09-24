import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  // gold #CDB87D
  <footer>
     © {new Date().getFullYear()}, Built by <a href="https://www.pittcsc.org">PittCSC</a>.
          {` `} (Not affiliated with Pitt CS Department)
          
  </footer>
)

export default Footer
