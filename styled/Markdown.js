import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

import { MediumTitle, LargeTitle } from "./typography"

const Markdown = ({ children, largeMedium }) => (
  <ReactMarkdown
    linkTarget="_blank"
    renderers={largeMedium ? largeMediumRenderer : null}
  >
    {children}
  </ReactMarkdown>
)

const MediumParagraph = styled(MediumTitle)`
  margin-bottom: 0;
`

const largeMediumRenderer = {
  heading: ({ children }) => <LargeTitle>{children}</LargeTitle>,
  paragraph: ({ children }) => <MediumParagraph>{children}</MediumParagraph>
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  largeMedium: PropTypes.bool
}

export default Markdown
