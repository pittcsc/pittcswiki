import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex flex-none h-16 px-8 mb-4 pwiki-header">
    <div className="flex items-center flex-1 justify-between">
      <div className="md:flex hidden">
        <span className="font-semibold pl-4">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </span>
        <nav className="flex ml-8">
          <ul className="-mt-1 flex m-0">
            <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Courses
            </li>
            <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Internships
            </li>
            <li className="text-white rounded hover:bg-gray-800 mt-1 px-2">
              Resume
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full md:w-1/3">
        <div className="relative">
          <input
            placeholder="Search!"
            className="transition-colors duration-100 ease-in-out 
                       focus:outline-0 border border-transparent 
                       focus:bg-white focus:border-gray-300 
                       placeholder-gray-600 rounded-sm bg-gray-200 
                       py-1 pr-4 pl-10 block w-full appearance-none
                       leading-normal ds-input"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg
              class="fill-current pointer-events-none text-gray-600 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={{ maxWidth: "30px" }}
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
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
