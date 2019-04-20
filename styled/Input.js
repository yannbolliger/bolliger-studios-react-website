import React, { useReducer } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { borders, baseUnits, breakpoints } from "."

const Input = props => {
  const onChange = event =>
    props.onChangeInputState({ type: "value", value: event.target.value })

  const InputType = props.type === "textarea" ? MultiLineInput : BasicInput

  const labelText = props.label || props.name
  const label = labelText[0].toUpperCase() + labelText.substr(1)

  return (
    <InputWrapper fullWidth={props.type === "textarea"}>
      <label htmlFor={props.name}>{label}</label>

      <InputType
        {...props}
        onChange={onChange}
        value={props.inputState.value}
      />

      {props.inputState.error && (
        <ErrorLabel>{props.inputState.error}</ErrorLabel>
      )}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  margin-top: ${baseUnits(0.25)};
  margin-bottom: ${baseUnits(0.25)};
  flex-basis: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-basis: ${props =>
      props.fullWidth ? "100%" : `calc(50% - ${baseUnits(0.25)})`};
  }
`

const sharedInputStyles = css`
  width: 100%;

  font-size: 1rem;
  background: transparent;
  border: none;
  border-bottom: ${borders(true)};
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
  onChangeInputState: PropTypes.func.isRequired,
  inputState: PropTypes.object.isRequired,
  label: PropTypes.string
}

export default Input

export const useInputState = initialState => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "error":
        return { ...state, error: action.error }
      default:
        return { ...state, value: action.value }
    }
  }

  const [inputState, setInputState] = useReducer(reducer, {
    value: initialState,
    error: ""
  })

  return [inputState, setInputState]
}
