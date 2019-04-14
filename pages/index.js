import React from "react"
import Head from "next/head"

import { useApiData } from "../api"
import LogoMenuHeader from "../components/LogoMenuHeader"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import TextBlockSection from "../components/TextBlockSection"

const Home = () => {
  const textBlocks = useApiData({ collection: "text_blocks" })

  const textBlocksBySlug = Object.values(textBlocks).reduce(
    (map, block) => ({ [block.slug]: block, ...map }),
    {}
  )

  return (
    <>
      <Head>
        <title>Bolliger Studios</title>
      </Head>

      <LogoMenuHeader titles={Object.values(textBlocks).map(b => b.title)} />

      <AboutSection textBlock={textBlocksBySlug.about} />

      <ProjectsSection textBlock={textBlocksBySlug.projects} />

      <TextBlockSection textBlock={textBlocksBySlug.contact} borderTop />
    </>
  )
}

export default Home
