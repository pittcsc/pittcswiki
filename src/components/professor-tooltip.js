import { useStaticQuery, graphql } from "gatsby";
import React from "react"

// Check if the user is on a touch screen device
// https://stackoverflow.com/a/13470899/9017299
const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

const externalLinkIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="external-link-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    class="inline"
    style={{
      width: "0.8em",
      display: "inline-block",
      fontSize: "inherit",
      height: "0.8em",
      verticalAlign: "0em",
  }}>
    <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" class=""></path>
  </svg>
)

const ProfessorTooltip = ({ prof }) => {
  const data = useStaticQuery(graphql`
  query {
    allRmpData {
      nodes {
        professor_id,
        professor_all_names,
        professor_full_name,
        average_rating,
        average_difficulty_rating,
      }
    }
  }
  `);

  const matchingRmpData = data.allRmpData.nodes
      .filter((node) => node.professor_all_names.includes(prof))
      .sort((a, b) => b.total_ratings - a.total_ratings);
  const profRMPData = matchingRmpData.length > 0 ? matchingRmpData[0] : null;

  if (!profRMPData) {
    return (
      <span>{prof}</span>
    )
  }

  if (supportsTouch) {
    return (
      <span className="tooltip text-black">
        {profRMPData.professor_full_name}
        <div className="bg-white block border px-4 py-3 shadow-2xl tooltiptext">
          <p className="mb-0">Rate My Professors</p>
          <p className="mb-0">
            <span className="font-medium text-gray-500">Quality rating </span>
            <span>{profRMPData.average_rating}/5</span>
          </p>
          <p className="mb-0">
            <span className="font-medium text-gray-500">Difficulty rating </span>
            <span>{profRMPData.average_difficulty_rating}/5</span>
          </p>
          <a
            href={`https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${profRMPData.professor_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-medium">
            See more {externalLinkIcon}
          </a>
        </div>
      </span>
    );
  } else {
    return (
      <a 
        href={`https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${profRMPData.professor_id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="tooltip text-black">
        {profRMPData.professor_full_name} {externalLinkIcon}
        <div className="bg-white block border px-4 py-3 shadow-2xl tooltiptext">
          <p className="mb-0">Rate My Professors</p>
          <p className="mb-0">
            <span className="font-medium text-gray-500">Quality rating </span>
            <span>{profRMPData.average_rating}/5</span>
          </p>
          <p className="mb-0">
            <span className="font-medium text-gray-500">Difficulty rating </span>
            <span>{profRMPData.average_difficulty_rating}/5</span>
          </p>
        </div>
      </a>
    );
  }
}

export default ProfessorTooltip;
