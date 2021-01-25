import React from "react"
import { FaPaperPlane } from "react-icons/fa"

export default function ContactForm() {
  return (
    <form action="https://www.enformed.io/dfh2t77z" method="POST">
      <div className="form-row">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          className="input-field"
          name="full_name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-row">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          className="input-field"
          name="senders_email"
          placeholder="Enter your Email"
          required
        />
      </div>

      <div className="form-row">
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="input-field"
          name="message"
          rows="5"
          placeholder="Message...."
          required
        ></textarea>
      </div>
      <button id="submit" type="submit">
        Submit <FaPaperPlane />
      </button>
    </form>
  )
}
