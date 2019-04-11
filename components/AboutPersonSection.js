import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors } from "../styled"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Image from "../styled/Image"
import { MediumTitle } from "../styled/typography"

const AboutPersonSection = ({ person, borderRight }) => (
  <Container color={colors.primaryLight} borderRight={borderRight}>
    <SideTitleSection title="Partner">
      <MediumTitle>{person}</MediumTitle>
    </SideTitleSection>

    <p>About – asd asdf asdf</p>
    <Image src="https://bolligerstudios.ch/site/assets/files/1/webbilder00014.1600x0.jpg" />

    <SplitView>
      <SideMargin>Social Links</SideMargin>

      <p>
        <a>Github</a>
        <a>Blog</a>
      </p>
    </SplitView>
  </Container>
)

AboutPersonSection.propTypes = {
  borderRight: PropTypes.bool
}

export default AboutPersonSection
