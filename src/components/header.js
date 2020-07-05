import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/pantherhandbook-mini.svg"
import Search from "./search"

const Header = ({ siteTitle }) => (
  <header className="flex flex-none h-16 px-8 mb-4 bg-pittblue pwiki-header">
    <div className="flex items-center flex-1 justify-between">
      <div className="flex items-center">
        <Link
          to="/"
          className="header-logo flex font-semibold text-white items-center"
        >
          <img
            className="w-10 md:mr-0 mr-4"
            style={{ maxWidth: "50px" }}
            src={logo}
            alt=""
          ></img>
        </Link>
      </div>
      <div className="w-full md:w-1/3">
        <div className="relative">
          <Search collapse />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
