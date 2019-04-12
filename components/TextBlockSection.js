import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"

import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import { MediumParagraph, LargeTitle } from "../styled/typography"

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
