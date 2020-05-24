// Inspired by https://github.com/gatsbyjs/gatsby/tree/master/www/src/components/feedback-widget

import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)
config.autoAddCss = false

const States = {
  IS_HELPFUL: "IS_HELPFUL",
  FORM: "FORM",
  THANK_YOU: "THANK_YOU",
}

const FeedbackTitle = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-2 w-full md:w-1/3 border bg-pittgold shadow-sm"
  >
    Was this helpful?
  </button>
)

const FeedbackForm = ({ onSubmit }) => {
  const [sentiment, setSentiment] = useState(null)

  return (
    <div className="w-full md:w-1/3 m-auto relative feedback-form">
      <form netlify="true">
        <div
          style={{ bottom: "60px" }}
          className="absolute flex flex-col justify-between border bg-white shadow-md h-64 p-3 w-full"
        >
          <div className="text-left">
            <label>Rate your experience</label>

            <div className="flex justify-between">
              <div
                onClick={() => setSentiment("poor")}
                className={"sentiment " + (sentiment === "poor" && " active")}
              >
                <FontAwesomeIcon
                  className="face-icon "
                  style={{ width: "50px" }}
                  icon="frown"
                />
                <span className="font-bold text-gray-800">Poor</span>
              </div>
              <div
                onClick={() => setSentiment("okay")}
                className={"sentiment " + (sentiment === "okay" && " active")}
              >
                <FontAwesomeIcon
                  className="face-icon"
                  style={{ width: "50px" }}
                  icon="meh"
                />
                <span className="font-bold text-gray-800">Okay</span>
              </div>
              <div
                onClick={() => setSentiment("great")}
                className={"sentiment " + (sentiment === "great" && " active")}
              >
                <FontAwesomeIcon
                  className="face-icon"
                  style={{ width: "50px" }}
                  icon="smile"
                />
                <span className="font-bold text-gray-800">Great</span>
              </div>
            </div>
          </div>
          <div className="text-left">
            <label className="w-full font-bold">
              Your comments (optional):
            </label>
            <textarea className="p-3 w-full flex border h-20 mt-auto"></textarea>
          </div>
        </div>
        <button
          className="p-2 mt-3 w-full border bg-gray-200"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default function FeedbackWidget() {
  const [formState, setFormState] = useState(States.IS_HELPFUL)

  const elements = {
    [States.IS_HELPFUL]: (
      <FeedbackTitle onClick={() => setFormState(States.FORM)} />
    ),
    [States.FORM]: (
      <FeedbackForm onSubmit={() => setFormState(States.THANK_YOU)} />
    ),
    [States.THANK_YOU]: (
      <div className="bg-orange-200 p-4">
        Thanks! Your comments will make the wiki better!
      </div>
    ),
  }

  return elements[formState]
}
