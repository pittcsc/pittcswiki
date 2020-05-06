import React from "react"

const Testimonial = ({ review, difficulty, prof, term, year, quality }) => {
  return (
    <div className="border shadow-sm">
      <div className="bg-pittblue flex justify-between text-white px-3 py-1">
        <span>
          <span className="mr-4">
            <span className="text-gray-500">Term </span>
            {term} {year}
          </span>
          <span>
            <span className="text-gray-500">Profressor </span>
            {prof}{" "}
          </span>
        </span>
        <span>
          <span className="mr-4">
            <span className="text-gray-500">Difficulty </span>
            {difficulty}/5
          </span>
          <span>
            <span className="text-gray-500">Quality </span>
            {quality}/5
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
