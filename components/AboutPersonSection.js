import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, baseUnits } from "../styled"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Image from "../styled/Image"
import { MediumTitle } from "../styled/typography"
import Markdown from "../styled/Markdown"

const AboutPersonSection = ({ personalInfo, borderRight }) => (
  <Container color={colors.primaryLight} borderRight={borderRight} borderTop>
    <SideTitleSection title="Partner">
      <MediumTitle>
        {personalInfo.person.first_name} {personalInfo.person.last_name}
      </MediumTitle>
    </SideTitleSection>

    {personalInfo.links && (
      <SplitView>
        <SideMargin>Links</SideMargin>
        <Markdown>{personalInfo.links}</Markdown>
      </SplitView>
    )}

    {personalInfo.photo && <Image src={personalInfo.photo.data.full_url} />}

    <MarginWrapper marginTop={!personalInfo.photo}>
      <Markdown>{`About &mdash; ${personalInfo.description}`}</Markdown>
    </MarginWrapper>
  </Container>
)

const MarginWrapper = styled.div`
  margin-top: ${props => (props.marginTop ? baseUnits(0.5) : "0")};
`

AboutPersonSection.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  borderRight: PropTypes.bool
}

export default AboutPersonSection
