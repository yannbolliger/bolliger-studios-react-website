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

const InlineParagraph = styled.p`
  display: inline-block;
  margin-right: ${baseUnits(0.25)};
`

const largeMediumRenderer = {
  heading: props => <LargeTitle {...props} />,
  paragraph: props => <MediumParagraph {...props} />
}

const linkRenderer = {
  link: props => <Button {...props} />
}

const inlineRenderer = {
  paragraph: props => <InlineParagraph {...props} />
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  largeMedium: PropTypes.bool,
  inlineBlocks: PropTypes.bool,
  links: PropTypes.bool
}

export default Markdown
