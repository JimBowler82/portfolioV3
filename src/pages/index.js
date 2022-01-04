import React from "react"
import HeaderNav from "../components/headerNav"
import PageHeading from "../components/pageHeading"
import ContactIcons from "../components/contactIcons"

export default function Home({ location }) {
  return (
    <div id="bg-img">
      <HeaderNav location={location} />
      <main id="home">
        <PageHeading
          mainFirst="James"
          mainSecond="Bowler"
          subHeading="Full Stack PHP, Laravel & JavaScript Developer"
        />
        <ContactIcons />
      </main>
    </div>
  )
}
