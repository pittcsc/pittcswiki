import React from "react"

const TermPills = ({ termsMap }) => {
  return (
    <div className="m-0">
      <span
        className={
          "border px-1 mr-2 " +
          (termsMap.FALL
            ? "bg-green-400  text-green-800 border-green-500"
            : "text-gray-300")
        }
      >
        FALL
      </span>
      <span
        className={
          "border px-1 mr-2 " +
          (termsMap.SPRING
            ? "bg-green-400 text-green-800  border-green-500"
            : "text-gray-300")
        }
      >
        SPRING
      </span>
      <span
        className={
          "border px-1 " +
          (termsMap.SUMMER
            ? "bg-green-400  text-green-800  border-green-500"
            : "text-gray-300")
        }
      >
        SUMMER
      </span>
    </div>
  )
}

export default TermPills
