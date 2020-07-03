// Inspired by https://github.com/gatsbyjs/gatsby/tree/master/www/src/components/feedback-widget

import React, { useState } from "react"

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
                {sadFaceIcon}
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
                {okayFaceIcon}
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
                {greatFaceIcon}
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

const sadFaceIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="frown"
    className="face-icon fa-frown"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    style={{ width: "50px" }}
  >
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"
    ></path>
  </svg>
)
const okayFaceIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="meh"
    className="face-icon fa-meh"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    style={{ width: "50px" }}
  >
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
    ></path>
  </svg>
)
const greatFaceIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="smile"
    className="face-icon fa-smile"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    style={{ width: "50px" }}
  >
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
    ></path>
  </svg>
)
