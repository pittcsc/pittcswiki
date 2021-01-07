import React from "react"
import ProfessorTooltip from "./professor-tooltip"

const Testimonial = ({ review, difficulty, prof, term, year, quality }) => {
  return (
    <div className="border shadow-sm mb-4">
      <div className="bg-gray-100 flex flex-col md:flex-row justify-between text-gray-900 px-3 py-1 border-b">
        <span>
          <span className="mr-4">
            <span className="text-gray-500">Term </span>
            <span className="font-bold">
              {term} {year}
            </span>
          </span>
          <span>
            <span className="text-gray-500">Professor </span>
            <span className="font-bold"> <ProfessorTooltip prof={prof} /> </span>
          </span>
        </span>
        <span>
          <span className="mr-4">
            <span className="text-gray-500">Difficulty </span>
            <span className="font-bold">{difficulty}/5</span>
          </span>
          <span>
            <span className="text-gray-500">Quality </span>
            <span className="font-bold">{quality}/5</span>
          </span>
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm mb-0">{review}</p>
      </div>
    </div>
  )
}

export default Testimonial
