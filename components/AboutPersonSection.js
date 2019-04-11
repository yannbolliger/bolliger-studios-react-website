import React from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Image from "../styled/Image"
import { MediumTitle } from "../styled/typography"

const AboutPersonSection = ({ personalInfo, borderRight }) => (
  <Container color={colors.primaryLight} borderRight={borderRight}>
    <SideTitleSection title="Partner">
      <MediumTitle>
        {personalInfo.person.first_name} {personalInfo.person.last_name}
      </MediumTitle>
    </SideTitleSection>

    <p>About &mdash; {personalInfo.description}</p>

    {personalInfo.photo && <Image src={personalInfo.photo.data.full_url} />}

    <SplitView>
      <SideMargin>Links</SideMargin>

      <p>{personalInfo.links}</p>
    </SplitView>
  </Container>
)

AboutPersonSection.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  borderRight: PropTypes.bool
}

export default AboutPersonSection
