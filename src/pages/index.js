import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.svg"
import campusBackground from "../images/pittcampus.jpg"
import coursesIcon from "../images/icons/courses.svg"
import academicsIcon from "../images/icons/academic.svg"
import careerIcon from "../images/icons/career.svg"
import guidesIcon from "../images/icons/guides.svg"
import sitemapIcon from "../images/icons/sitemap.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="landing-image">
        <img alt="" src={campusBackground} className="w-auto md:w-full" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="md:mt-24 flex">
          <div className="self-end h-64 bg-white p-6 shadow-2xl w-1/2 border">
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
      className="my-12 flex flex-col flex-wrap md:flex-row justify-center"
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
        <img
          className="w-16 mx-auto"
          alt="Courses from the Noun Project"
          src={coursesIcon}
        />
        <h3>Course Explorer</h3>
        <p>
          Read course testimonials, profressor reviews, and find which electives
          are right for you. <Link to="/courses/">Learn more.</Link>
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
        <img src={guidesIcon} alt="guide by Youmena from the Noun Project" />
        <h3>Guides</h3>
        <p>
          All of our tips and content organized by topic! Everything from
          studying abroad, to if CS is right for you, to managing your finances!{" "}
          <Link to="/guides/">Learn more.</Link>
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
        <img
          src={careerIcon}
          alt="career by Thuy Nguyen from the Noun Project"
        />
        <h3>Career</h3>
        <p>
          There are big ships and small ships, but the best ships are
          internships! Check out all of our tips on how to land job offers and
          suceed in your career journey. <Link to="/career/">Learn more.</Link>
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
        <img
          src={academicsIcon}
          alt="academic by pam pyke from the Noun Project"
        />
        <h3>Academics</h3>
        <p>
          Thinking about a double major? Is your schedule right? Curious about
          research? Learn the answers to all of your related questions here!{" "}
          <Link to="/academics/">Learn more.</Link>
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
        <img
          src={sitemapIcon}
          alt="Sitemap by Adrien Coquet from the Noun Project"
        />
        <h3>Sitemap</h3>
        <p>
          Click here to see a list of EVERYTHING we have!{" "}
          <Link to="/sitemap/">Learn more.</Link>
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
