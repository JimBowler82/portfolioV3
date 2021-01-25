import React from "react"
import { FaCodepen, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function ContactIcons() {
  return (
    <div className="icons">
      <a href="https://github.com/JimBowler82" target="_blank">
        <FaGithub style={{ fontSize: "2.1rem" }} />
      </a>
      <a href="https://codepen.io/JimBowler82/" target="_blank">
        <FaCodepen style={{ fontSize: "2.1rem" }} />
      </a>
      <a href="https://twitter.com/JimBowler82" target="_blank">
        <FaTwitter style={{ fontSize: "2.1rem" }} />
      </a>
      <a href="https://www.linkedin.com/in/JimBowler82/" target="_blank">
        <FaLinkedin style={{ fontSize: "2.1rem" }} />
      </a>
    </div>
  )
}
