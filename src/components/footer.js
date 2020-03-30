import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Footer = () => (
  // gold #CDB87D
  <footer>
     © {new Date().getFullYear()}, Made with <FontAwesomeIcon icon="heart" color="red"/> by <a href="https://pittcsc.org">PittCSC</a>.
          {` `} (Not affiliated with Pitt CS Department)
          
  </footer>
)

export default Footer
