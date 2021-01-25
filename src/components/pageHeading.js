import React from "react"

export default function PageHeading({ mainFirst, mainSecond, subHeading }) {
  return (
    <>
      <h1 className="lg-heading">
        {mainFirst} <span className="text-secondary">{mainSecond}</span>
      </h1>

      <h2 className="sm-heading">{subHeading}</h2>
    </>
  )
}
