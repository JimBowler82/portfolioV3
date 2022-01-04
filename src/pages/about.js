import React from "react"
import HeaderNav from "../components/headerNav"
import PageHeading from "../components/pageHeading"
import Footer from "../components/footer"

export default function About({ location }) {
  return (
    <>
      <HeaderNav location={location} />
      <main id="about">
        <PageHeading
          mainFirst="About"
          mainSecond="Me"
          subHeading="Let me tell you a few things..."
        />
        <div className="about-info">
          <img
            src={"./portrait3.jpg"}
            alt="James Bowler"
            className="bio-image"
          />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Hi! My name is James. I am a full stack PHP, Laravel & JavaScript
              developer with experience delivering real world solutions in agile
              tech environments.
            </p>
          </div>

          <div className="job job-1">
            <h3>The Open University</h3>
            <h5>BSc (Honours) Computing and IT (Software)</h5>

            <p>Completed Modules:</p>
            <ul>
              <li>My Digital Life</li>
              <li>Discovering Mathematics</li>
              <li>Technologies in Practice</li>
              <li>Object-Oriented Java Programming</li>
              <li>Software Development with Java</li>
              <li>Algorithms, Data Structures and Computability</li>
              <li>Web Technologies</li>
              <li>Web, Mobile and Cloud Technologies</li>
              <li>Interaction Design & UX</li>
              <li>Software Engineering</li>
              <li>Computing & IT Project</li>
            </ul>
          </div>

          <div className="job job-2">
            <h3>Student Full Stack JavaScript Developer</h3>
            <h5>School Of Code | Cohort 4</h5>
            <p>
              Chosen from 1800 applicants to join a 16 week intensive coding
              bootcamp to become full-stack JavaScript developers. Learning
              alongside 47 other students to develop a range of technical skills
              while solving real world problems in diverse teams.
            </p>
            <div id="skill-sect">
              <div>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6)</li>
                  <li>REACT</li>
                  <li>Node.JS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Agile Team Work & Project Management</li>
                  <li>Responsive Design</li>
                  <li>Object-Oriented Programming</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job job-3">
            <h3>Associated Technical Qualifications</h3>
            <h5>Comptia A+</h5>
            <p>
              An IT technical certificate for technical support and IT
              operational roles. This certificate covers many aspects from
              software troubleshooting, operating systems, hardware maintenance
              to security
            </p>
            <div id="logo-section">
              <div id="comptia-logo">
                <img src={"./comptia.png"} alt="comptia logo" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
