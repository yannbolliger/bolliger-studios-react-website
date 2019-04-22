import React, { useEffect, useRef } from "react"
import Head from "next/head"
import smoothscroll from "smoothscroll-polyfill"

import { useApiData } from "../api"
import LogoMenuHeader from "../components/LogoMenuHeader"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

const sections = [
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSection },
  { id: "contact", component: ContactSection }
]

const Home = () => {
  useEffect(() => smoothscroll.polyfill())

  const textBlocks = useApiData({ collection: "text_blocks" })
  const textBlocksBySlug = Object.values(textBlocks).reduce(
    (map, block) => ({ [block.slug]: block, ...map }),
    {}
  )

  const sectionsWithText = sections.map(section => ({
    textBlock: textBlocksBySlug[section.id],
    ref: useRef(null),
    ...section
  }))

  return (
    <>
      <Head>
        <title>Bolliger Studios</title>
      </Head>

      <LogoMenuHeader sections={sectionsWithText} />

      {sectionsWithText.map(section => (
        <section.component
          key={section.id}
          textBlock={section.textBlock}
          scrollRef={section.ref}
        />
      ))}
    </>
  )
}

export default Home
