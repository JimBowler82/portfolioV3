import React from "react"
import HeaderNav from "../components/headerNav"
import PageHeading from "../components/pageHeading"
import ContactForm from "../components/contactForm"
import ContactIcons from "../components/contactIcons"
import Footer from "../components/footer"

export default function Contact({ location }) {
  return (
    <>
      <HeaderNav location={location} />
      <main id="contact">
        <PageHeading
          mainFirst="Contact"
          mainSecond="Me"
          subHeading="This is how you can reach me..."
        />
        <div id="contact-main">
          <div id="form-section">
            <ContactForm />
          </div>
          <div id="contact-details">
            <h3>James Bowler</h3>

            <div id="contact-group-1">
              <div id="contact-email">
                <span class="text-secondary">Email:</span>
                <br />
                J.Bowler2017@gmail.com
              </div>
              <div id="contact-number">
                <span class="text-secondary">Phone:</span>
                <br />
                ***********
              </div>
            </div>

            <div id="contact-group-2">
              <span class="text-secondary">Address:</span>
              <ul>
                <li>*** ****** ****</li>
                <li>********</li>
                <li>**************</li>
                <li>*** ***</li>
              </ul>
            </div>
            <ContactIcons />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
