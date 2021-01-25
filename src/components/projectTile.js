import React from "react"
import { FaEye, FaGithub } from "react-icons/fa"

export default function ProjectTile({ src, alt, url, git }) {
  return (
    <div className="item">
      <a href="#">
        <img src={src} alt={alt} />
      </a>
      <a href="url" className="btn-light" target="_blank">
        <FaEye /> View Project
      </a>
      <a href="src" className="btn-dark" target="_blank">
        <FaGithub /> GitHub
      </a>
    </div>
  )
}
