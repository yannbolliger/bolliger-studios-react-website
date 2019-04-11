import React from "react"

import { useApiData } from "../api"
import { colors } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import SideTitleSection from "../styled/SideTitle"
import { MediumParagraph, LargeTitle } from "../styled/typography"

const ProjectsSection = () => {
  return (
    <>
      <Container borderTop color={colors.secondary}>
        <SideTitleSection title="Bolliger Studios">
          <div>
            <LargeTitle>Unser Angebot</LargeTitle>
            <MediumParagraph>asdf asdf asdf asdf</MediumParagraph>
          </div>
        </SideTitleSection>
      </Container>
    </>
  )
}

export default ProjectsSection
