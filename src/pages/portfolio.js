import React from "react"
import HeaderNav from "../components/headerNav"
import PageHeading from "../components/pageHeading"
import ProjectTile from "../components/projectTile"
import Footer from "../components/footer"

const projects = [
  {
    src: "./projects/wikiViewer.png",
    alt: "Wikipedia Viewer Project",
    url: "",
    git: "",
  },
  {
    src: "./projects/calculator.png",
    alt: "Calculator Project",
    url: "",
    git: "",
  },
  {
    src: "./projects/bookmarker.png",
    alt: "Bookmarker Project",
    url: "",
    git: "",
  },
  { src: "./projects/twitchTV.png", alt: "TwitchTV project", url: "", git: "" },
  {
    src: "./projects/filterList.png",
    alt: "Filterable List Project",
    url: "",
    git: "",
  },
  {
    src: "./projects/quoteMachine.png",
    alt: "Random Quote Project",
    url: "",
    git: "",
  },
  {
    src: "./projects/itemLister.png",
    alt: "Item Lister Project",
    url: "",
    git: "",
  },
  {
    src: "./projects/blockbreaker.png",
    alt: "Block Breaker Project",
    url: "",
    git: "",
  },
  { src: "./projects/pong.png", alt: "Tennis Game Project", url: "", git: "" },
]

export default function Portfolio({ location }) {
  return (
    <>
      <HeaderNav location={location} />
      <main id="work">
        <PageHeading
          mainFirst="My"
          mainSecond="Projects"
          subHeading="Check out some of my projects..."
        />
        <div className="projects">
          {projects.map((project, i) => {
            return (
              <ProjectTile
                key={i}
                src={project.src}
                alt={project.alt}
                url={project.url}
                git={project.git}
              />
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
