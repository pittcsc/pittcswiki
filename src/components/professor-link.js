import { useStaticQuery, graphql } from "gatsby";
import React from "react"

const ProfessorLink = ({ prof }) => {
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

  return (
    <a 
      href={`https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${profRMPData.professor_id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="tooltip text-black">
      {profRMPData.professor_full_name}
      <div className="bg-white block border px-4 py-3 shadow-2xl tooltiptext">
        <p className="mb-0">Rate My Professor</p>
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

export default ProfessorLink;
