import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)
config.autoAddCss = false

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Made with{" "}
    <FontAwesomeIcon icon="heart" color="#F44336" /> by{" "}
    <a href="https://pittcsc.org">PittCSC</a>.{` `}
    <p>(Not affiliated with Pitt CS Department)</p>
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
  </a>
  </footer>
)

export default Footer
