import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import Markdown from "../styled/Markdown"

const TextBlockSection = ({
  textBlock,
  color,
  borderTop,
  children,
  scrollRef
}) =>
  !textBlock ? null : (
    <ContainerMorePadding borderTop={borderTop} color={color} ref={scrollRef}>
      <SideTitleSection title={textBlock.title}>
        <PaddingRightWrapper>
          <Markdown largeMedium>{textBlock.text}</Markdown>

          {children}
        </PaddingRightWrapper>
      </SideTitleSection>
    </ContainerMorePadding>
  )

const ContainerMorePadding = styled(Container)`
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(1)};
    padding-bottom: ${baseUnits(1)};
  }
`

const PaddingRightWrapper = styled.div`
  padding-right: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-right: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-right: ${baseUnits(4)};
  }
`

TextBlockSection.propTypes = {
  textBlock: PropTypes.object,
  scrollRef: PropTypes.object,
  color: PropTypes.string,
  borderTop: PropTypes.bool,
  children: PropTypes.node
}

export default TextBlockSection
