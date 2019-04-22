import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

import { baseUnits } from "."
import { MediumTitle, LargeTitle } from "./typography"
import Button from "./Button"

const Markdown = ({ children, largeMedium, links, inlineBlocks }) => {
  const renderers = Object.assign(
    largeMedium ? largeMediumRenderer : {},
    links ? linkRenderer : {},
    inlineBlocks ? inlineRenderer : {}
  )

  return (
    <ReactMarkdown linkTarget="_blank" renderers={renderers}>
      {children}
    </ReactMarkdown>
  )
}

const MediumParagraph = styled(MediumTitle)`
  margin-bottom: 0;
`

const largeMediumRenderer = {
  heading: ({ children }) => <LargeTitle>{children}</LargeTitle>,
  paragraph: ({ children }) => <MediumParagraph>{children}</MediumParagraph>
}

const linkRenderer = {
  link: ({ children }) => <Button>{children}</Button>
}

const InlineParagraph = styled.p`
  display: inline-block;
  margin-right: ${baseUnits(0.25)};
`

const inlineRenderer = {
  paragraph: ({ children }) => <InlineParagraph>{children}</InlineParagraph>
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  largeMedium: PropTypes.bool,
  inlineBlocks: PropTypes.bool,
  links: PropTypes.bool
}

export default Markdown
