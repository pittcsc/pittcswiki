// Inspired by https://github.com/gatsbyjs/gatsby/tree/master/www/src/components/feedback-widget

import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)
config.autoAddCss = false

const States = {
  DOC: "DOC",
  FORM: "FORM",
  THANK_YOU: "THANK_YOU",
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FeedbackTitle = ({ onClick, show }) => (
  <button
    onClick={onClick}
    className={
      "btn bg-pittgold shadow-sm hover:shadow-xl hover:bg-gray-800 hover:text-white " +
      (show ? "" : "hidden")
    }
  >
    Was this helpful?
  </button>
)

const FeedbackForm = ({ setFormState, show }) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const [sending, setSending] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "feedback",
        ...state,
        location: window.location,
      }),
    }).then(() => {
      setSending(false)
      setFormState(States.THANK_YOU)
    })
  }

  return (
    <div
      className={
        "w-full md:w-1/2 relative feedback-form " + (show ? "" : "hidden")
      }
    >
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
        <input hidden name="location" onChange={handleChange} />
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
            className="p-2 border bg-gray-200 hover:bg-gray-800 hover:text-white"
            onClick={() => setFormState(States.DOC)}
          >
            Cancel
          </button>

          <button
            className="p-2 ml-4 w-1/2 border bg-pittgold hover:shadow-xl hover:bg-gray-800 hover:text-white "
            type="submit"
          >
            {sending ? "Sending..." : "Send Feedback!"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function FeedbackWidget() {
  const [formState, setFormState] = useState(States.DOC)

  return (
    <>
      <FeedbackTitle
        show={formState === States.DOC}
        onClick={() => setFormState(States.FORM)}
      />
      <FeedbackForm
        show={formState === States.FORM}
        setFormState={setFormState}
      />
      <div
        className={
          formState === States.THANK_YOU
            ? "bg-pink-400 p-4 text-pink-900"
            : "hidden"
        }
      >
        Thanks! Your feedback makes the wiki better!
      </div>
    </>
  )
}
