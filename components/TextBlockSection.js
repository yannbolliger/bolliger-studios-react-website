import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import { MediumTitle, LargeTitle } from "../styled/typography"

const TextBlockSection = ({ textBlock, color, borderTop }) =>
  !textBlock ? null : (
    <Container borderTop={borderTop} color={color}>
      <SideTitleSection title={textBlock.title}>
        <div>
          <ReactMarkdown
            linkTarget="_blank"
            renderers={largeMediumRenderer}
            source={textBlock.text}
          />
        </div>
      </SideTitleSection>
    </Container>
  )

const MediumParagraph = styled(MediumTitle)`
  padding-right: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-right: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-right: ${baseUnits(4)};
  }
`

const largeMediumRenderer = {
  heading: ({ children }) => <LargeTitle>{children}</LargeTitle>,
  paragraph: ({ children }) => <MediumParagraph>{children}</MediumParagraph>
}

TextBlockSection.propTypes = {
  textBlock: PropTypes.object,
  color: PropTypes.string,
  borderTop: PropTypes.bool
}

export default TextBlockSection
