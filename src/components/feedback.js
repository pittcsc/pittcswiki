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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FeedbackTitle = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-2 w-full md:w-1/3 border bg-pittgold shadow-sm"
  >
    Was this helpful?
  </button>
)

const FeedbackForm = ({ setFormState }) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "feedback",
        ...state,
      }),
    }).then(() => setFormState(States.THANK_YOU))
  }

  return (
    <div className="w-full md:w-1/3 m-auto relative feedback-form">
      <form
        name="feedback"
        data-netlify="true"
        action="/"
        data-netlify-honeypot="bot-field"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div
          style={{ bottom: "60px" }}
          className="absolute flex flex-col justify-between border bg-white shadow-md h-64 p-3 w-full"
        >
          <div className="text-left">
            <span> Rate your experience</span>
            <div className="flex justify-between">
              <div
                className={
                  "sentiment " + (state.sentiment === "poor" && " active")
                }
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="poor"
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  className="face-icon "
                  style={{ width: "50px" }}
                  icon="frown"
                />
                <span className="font-bold text-gray-800">Poor</span>
              </div>
              <div
                className={
                  "sentiment " + (state.sentiment === "okay" && " active")
                }
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="okay"
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  className="face-icon"
                  style={{ width: "50px" }}
                  icon="meh"
                />
                <span className="font-bold text-gray-800">Okay</span>
              </div>
              <div
                className={
                  "sentiment " + (state.sentiment === "great" && " active")
                }
              >
                <input
                  type="radio"
                  name="sentiment"
                  value="great"
                  onChange={handleChange}
                />
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
              <textarea
                name="comment"
                className="p-3 w-full flex border h-20 mt-auto"
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <button
            type="button"
            className="p-2 mt-3 border bg-gray-200"
            onClick={() => setFormState(States.IS_HELPFUL)}
          >
            Cancel
          </button>

          <button
            className="p-2 mt-3 ml-4 w-1/2 border bg-pittgold"
            type="submit"
          >
            Send feedback
          </button>
        </div>
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
    [States.FORM]: <FeedbackForm setFormState={setFormState} />,
    [States.THANK_YOU]: (
      <div className="bg-orange-200 p-4">
        Thanks! Your feedback makes the wiki better!
      </div>
    ),
  }

  return elements[formState]
}
