import React from "react"
import styled from "styled-components"

import { useApiData } from "../api"
import { baseUnits } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import SideTitleSection from "../styled/SideTitle"
import { MediumParagraph } from "../styled/typography"
import AboutPersonSection from "./AboutPersonSection"

const AboutSection = () => {
  const people = useApiData({
    collection: "personal_infos",
    fields: "*, person.first_name, person.last_name, photo.*"
  })

  return (
    <>
      <Container>
        <Logo src="static/BST-Logo.svg" />
      </Container>

      <Container borderBottom>
        <SideTitleSection title="Über uns">
          <MediumParagraph>
            Wir sind Éric und Yann. Uns faszinieren Grafik, Gin, die digitale
            Welt...
          </MediumParagraph>
        </SideTitleSection>
      </Container>

      {people[0] && people[1] && (
        <SplitView>
          <AboutPersonSection personalInfo={people[0]} borderRight />
          <AboutPersonSection personalInfo={people[1]} />
        </SplitView>
      )}
    </>
  )
}

const Logo = styled.img`
  width: ${baseUnits(6.28)};
`

export default AboutSection
