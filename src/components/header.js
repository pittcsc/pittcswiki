import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/pantherhandbook-mini.svg"
import Search from "./search"

const Header = ({ siteTitle }) => (
  <header className="flex flex-none h-16 px-8 mb-4 bg-pittblue pwiki-header">
    <div className="flex items-center flex-1 justify-between">
      <div className="md:flex hidden items-center">
        <Link
          to="/"
          className="header-logo flex font-semibold text-white uppercase items-center"
        >
          <img
            className={"w-10"}
            style={{ maxWidth: "50px" }}
            src={logo}
            alt=""
          ></img>
          <span className="ml-2 uppercase">{siteTitle}</span>
        </Link>
        <nav className="flex ml-8 align-middle">
          <ul className="-mt-1 flex m-0">
            {/* <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Courses
            </li>
            <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Internships
            </li>
            <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Resume
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="w-full md:w-1/3">
        <div className="relative">
          <Search
            collapse
            indices={[
              { name: "Guides", title: "Guides", hitComp: "GuideHit" },
              { name: "Courses", title: "Courses", hitComp: "CourseHit" },
            ]}
          />
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
