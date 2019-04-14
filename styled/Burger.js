import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, borderWidth, baseUnits } from "."

const Burger = ({ onClick }) => (
  <BurgerWrapper onClick={onClick}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </BurgerWrapper>
)

const BurgerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-self: center;

  width: ${baseUnits(0.5)};
  height: 1rem;
  flex-shrink: 0;

  cursor: pointer;
`

const BurgerLine = styled.span`
  width: 100%;
  height: ${borderWidth}
  background-color: ${colors.borderColor};
`

Burger.propTypes = {
  onClick: PropTypes.func
}

export default Burger
