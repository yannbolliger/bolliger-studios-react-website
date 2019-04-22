import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { borders, baseUnits, breakpoints } from "."

const Input = props => {
  const InputType = props.type === "textarea" ? MultiLineInput : BasicInput

  const labelText = props.label || props.name
  const capitalisedLabel = labelText[0].toUpperCase() + labelText.substr(1)

  return (
    <InputWrapper fullWidth={props.type === "textarea"}>
      <InputType {...props} placeholder={capitalisedLabel} />

      {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  margin-bottom: ${baseUnits(0.5)};
  flex-basis: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-basis: ${props =>
      props.fullWidth ? "100%" : `calc(50% - ${baseUnits(0.25)})`};
  }
`

const sharedInputStyles = css`
  width: 100%;
  padding-bottom: 0.25em;

  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  border: none;
  border-bottom: ${borders(true)};
  border-radius: 0;

  ::placeholder {
    opacity: 1;
    color: inherit;
  }
`

const BasicInput = styled.input`
  ${sharedInputStyles}
`

const MultiLineInput = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
`

const ErrorLabel = styled.div``

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string
}

export default Input
