import React from "react"
import styled, { css } from "styled-components"

const sharedButtonStyle = css`
  cursor: pointer;

  :hover {
    font-style: italic;
  }
`

const ButtonLink = styled.a`
  ${sharedButtonStyle}

  ::before {
    content: "→";
    vertical-align: top;
    margin-right: 0.25em;
  }
  :hover::before {
    font-style: normal;
  }
`
export default ButtonLink

const InnerInput = styled.input`
  appearance: none;
  background: none;
  border: none;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  ${sharedButtonStyle}
`

export const ButtonInput = props => (
  <ButtonLink as="div">
    <InnerInput {...props} />
  </ButtonLink>
)
