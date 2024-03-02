import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.svg"
import campusBackground from "../images/pittcampus.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="landing-image">
        <img alt="" src={campusBackground} className="w-auto md:w-full" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="md:mt-24 flex">
          <div className="hidden md:block self-end h-64 bg-white dark:bg-black p-6 shadow-2xl w-1/2 border dark:border-black">
            <h1>The Pitt CS Wiki</h1>
            <p>
              A collection of course testimonials, guides, career prep
              resources, and much more!
            </p>
            <Link
              to="/guides/"
              className="btn inline-flex bg-pittgold items-center"
            >
              Get Started {rightArrowSvg}
            </Link>
          </div>
          <div className="w-1/2">
            <img
              src={logo}
              className="ml-auto max-w-sm -mb-12"
              alt="Pitt CS Wiki Logo"
            />
          </div>
        </div>
        <div className="md:hidden mt-12">
          <h1>The Pitt CS Wiki</h1>
          <p>
            A collection of course testimonials, guides, career prep resources,
            and much more!
          </p>
          <Link
            to="/guides/"
            className="btn inline-flex bg-pittgold items-center"
          >
            Get Started {rightArrowSvg}
          </Link>
        </div>
        <LinkPanel />
      </div>
    </div>
  </Layout>
)

const LinkPanel = () => {
  // Shout out to Alex for originally creating this
  return (
    <div
      id="blurb-grid"
      className="my-12 flex flex-col items-center flex-wrap md:flex-row justify-center"
    >
      <div
        className="quick-blurb"
        onClick={() => navigate("/courses/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate("/courses/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="w-16 mx-auto fill-current"
          alt="Chalkboard user icon by Font Awesome"
        >
          <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
        </svg>
        <h3>Course Explorer</h3>
        <p>
          Find the right course for you! Professor reviews, course testimonials,
          and more. <Link to="/courses/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => navigate("/guides/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate("/guides/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-16 mx-auto fill-current"
          alt="Sign post icon by Font Awesome"
        >
          <path d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
        </svg>
        <h3>Guides</h3>
        <p>
          View all of our articles organized by topic. Check out popular ones
          and recently updated. <Link to="/guides/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => navigate("/career/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate("/career/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-16 mx-auto fill-current"
          alt="User wearing tie icon by Font Awesome"
        >
          <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
        </svg>
        <h3>Career</h3>
        <p>
          Read our carefully curated tips on how to land job offers and succeed
          in your career. <Link to="/career/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => navigate("/academics/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate("/academics/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="w-16 mx-auto fill-current"
          alt="Graduation cap icon by Font Awesome"
        >
          <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
        </svg>
        <h3>Academics</h3>
        <p>
          Thinking about a double major? Not sure what classes to take when?
          Curious about research? Learn the answers to all of your questions
          here! <Link to="/academics/">Learn more.</Link>
        </p>
      </div>
      <div
        className="quick-blurb"
        onClick={() => navigate("/sitemap/")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate("/sitemap/")
          }
        }}
        role="button"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-16 mx-auto fill-current"
          alt="Sitemap icon by Font Awesome"
        >
          <path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z" />
        </svg>
        <h3>Sitemap</h3>
        <p>
          We have a lot of content and its growing. Click here to see a list of
          everything we have. <Link to="/sitemap/">Learn more.</Link>
        </p>
      </div>
    </div>
  )
}

const rightArrowSvg = (
  <svg
    stroke="currentColor"
    className="ml-1"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
  </svg>
)

export default IndexPage
