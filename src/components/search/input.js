import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchIcon = () => (
  <svg
    className="fill-current pointer-events-none text-gray-600 w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{ maxWidth: "30px" }}
  >
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
  </svg>
)

const Form = ({ children }) => (
  <form className="flex flex-row-reverse items-center relative m-0">
    {children}
  </form>
)

export default connectSearchBox(({ refine, focusref, onFocus }) => (
  <Form>
    <input
      type="text"
      placeholder="Search"
      aria-label="Search"
      className="transition-colors duration-100 ease-in-out 
	  focus:outline-0 border border-transparent 
	  focus:bg-white focus:border-gray-300 
	  placeholder-gray-600 rounded-sm bg-gray-200 
	  py-1 pr-4 pl-10 block w-full appearance-none
	  leading-normal ds-input"
      onFocus={onFocus}
      ref={focusref}
      onChange={(e) => refine(e.target.value)}
    />

    <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
      <SearchIcon />
    </div>
  </Form>
))
