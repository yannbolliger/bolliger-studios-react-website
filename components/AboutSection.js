import React from "react"
import styled from "styled-components"

import { baseUnits } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import SideTitleSection from "../styled/SideTitle"
import { MediumParagraph } from "../styled/typography"
import AboutPersonSection from "./AboutPersonSection"

const AboutSection = () => (
  <>
    <Container>
      <Logo src="static/BST-Logo.svg" />
    </Container>

    <Container borderBottom>
      <SideTitleSection title="Über uns">
        <MediumParagraph>
          Wir sind Éric und Yann. Uns faszinieren Grafik, Gin, die digitale Welt
          ...
        </MediumParagraph>
      </SideTitleSection>
    </Container>

    <SplitView>
      <AboutPersonSection person="Yann Bolliger" borderRight />
      <AboutPersonSection person="Éric Bolliger" />
    </SplitView>
  </>
)

const Logo = styled.img`
  width: ${baseUnits(6.28)};
`

export default AboutSection
