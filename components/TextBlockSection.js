import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import styled, { css } from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import { MediumTitle, LargeTitle } from "../styled/typography"

const TextBlockSection = ({ textBlock, color, borderTop, children }) =>
  !textBlock ? null : (
    <ContainerMorePadding borderTop={borderTop} color={color}>
      <SideTitleSection title={textBlock.title}>
        <div>
          <ReactMarkdown
            linkTarget="_blank"
            renderers={largeMediumRenderer}
            source={textBlock.text}
          />

          {children}
        </div>
      </SideTitleSection>
    </ContainerMorePadding>
  )

const ContainerMorePadding = styled(Container)`
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(1)};
    padding-bottom: ${baseUnits(1)};
  }
`

const sharedPaddingRight = css`
  padding-right: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-right: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-right: ${baseUnits(4)};
  }
`

const MediumParagraph = styled(MediumTitle)`
  ${sharedPaddingRight}
  margin-bottom: 0;
`
const LargeTitleWithPaddingRight = styled(LargeTitle)`
  ${sharedPaddingRight}
`

const largeMediumRenderer = {
  heading: ({ children }) => (
    <LargeTitleWithPaddingRight>{children}</LargeTitleWithPaddingRight>
  ),
  paragraph: ({ children }) => <MediumParagraph>{children}</MediumParagraph>
}

TextBlockSection.propTypes = {
  textBlock: PropTypes.object,
  color: PropTypes.string,
  borderTop: PropTypes.bool,
  children: PropTypes.node
}

export default TextBlockSection
