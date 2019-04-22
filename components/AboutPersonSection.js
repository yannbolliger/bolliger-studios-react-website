import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { getThumbnail } from "../api"
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
        <Markdown inlineBlocks>{personalInfo.links}</Markdown>
      </SplitView>
    )}

    {personalInfo.photo && (
      <Image src={getThumbnail(personalInfo.photo.filename)} />
    )}

    <MarginWrapper marginTop={!personalInfo.photo}>
      <Markdown links>{`About &mdash; ${personalInfo.description}`}</Markdown>
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
