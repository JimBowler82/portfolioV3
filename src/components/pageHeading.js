import React from "react"

export default function PageHeading({ mainFirst, mainSecond, subHeading }) {
  return (
    <>
      <h1 class="lg-heading">
        {mainFirst} <span class="text-secondary">{mainSecond}</span>
      </h1>

      <h2 class="sm-heading">{subHeading}</h2>
    </>
  )
}
