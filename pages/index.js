import React from "react"
import Head from "next/head"

import AboutSection from "../components/AboutSection"
// import ProjectsSection from "../presenters/ProjectsSection"
// import ContactSection from "../presenters/ContactSection"

const Home = () => (
  <>
    <Head>
      <title>Bolliger Studios</title>
    </Head>

    <AboutSection />
    {
      // <ProjectsSection />
      // <ContactSection />
    }
  </>
)

export default Home
