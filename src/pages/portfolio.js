import React from "react"
import HeaderNav from "../components/headerNav"
import PageHeading from "../components/pageHeading"
import ProjectTile from "../components/projectTile"
import Footer from "../components/footer"

const projects = [
  {
    src: "./projects/ecomproject.png",
    alt: "EcomProject",
    url: "http://ecomproject.herokuapp.com/",
    git: "https://github.com/JimBowler82/ecomProject",
  },
  {
    src: "./projects/engagmate.png",
    alt: "EngageMate Project",
    url: "https://engagemate.netlify.app/",
    git: "",
  },
  {
    src: "./projects/tdproject.png",
    alt: "The Todo Project",
    url: "https://optimistic-pasteur-c3a5de.netlify.app/",
    git: "https://github.com/JimBowler82/theTodoProject-Client",
  },
  {
    src: "./projects/drawChat.png",
    alt: "DrawChat",
    url: "https://jolly-leakey-b370a1.netlify.app/",
    git: "https://github.com/JimBowler82/DrawChat",
  },
  {
    src: "./projects/quizApp.png",
    alt: "Trivia Quiz App",
    url: "https://sad-bassi-0c7323.netlify.app/",
    git: "https://github.com/JimBowler82/trivia-quiz-app",
  },
  {
    src: "./projects/ISSTracker.png",
    alt: "Space Station Tracker",
    url: "https://spacestation-tracker.netlify.app/",
    git: "https://github.com/JimBowler82/Space-Station-Tracker",
  },
  {
    src: "./projects/socPong.png",
    alt: "SoC Pong Project",
    url: "https://admiring-yalow-3b4727.netlify.app",
    git: "https://github.com/JimBowler82/SOC-Pong",
  },
  {
    src: "./projects/tictactoe_react.png",
    alt: "Tic Tac Toe in React project",
    url: "https://inspiring-goldberg-f1e2f5.netlify.app/",
    git: "https://github.com/JimBowler82/Tic-Tac-Toe-React",
  },
  {
    src: "./projects/rsp.png",
    alt: "Rock Paper Scissors Project",
    url: "https://sleepy-shirley-4d72eb.netlify.app/",
    git: "https://github.com/JimBowler82/Rock-Paper-Scissors-V2",
  },
  {
    src: "./projects/wikiViewer.png",
    alt: "Wikipedia search Project",
    url: "https://nervous-fermat-722433.netlify.app/",
    git: "https://github.com/JimBowler82/Wikipedia-Viewer",
  },
  {
    src: "./projects/todoApp.jpg",
    alt: "Todo App Project",
    url: "https://todoapp-jb.netlify.app/",
    git: "https://github.com/JimBowler82/Basic-Todo-App",
  },
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
