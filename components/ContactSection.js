import React from "react"

import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import { MediumParagraph, LargeTitle } from "../styled/typography"

const ContactSection = () => (
  <>
    <Container borderTop>
      <SideTitleSection title="Kontakt">
        <div>
          <LargeTitle>Say Hi!</LargeTitle>
          <MediumParagraph>Email</MediumParagraph>
        </div>
      </SideTitleSection>
    </Container>
  </>
)

export default ContactSection
