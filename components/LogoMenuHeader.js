import React from "react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"

const LogoMenuHeader = () => (
  <Container>
    <SplitView>
      <Logo src="static/BST-Logo.svg" />
    </SplitView>
  </Container>
)

const Logo = styled.img`
  width: ${baseUnits(6.28)};
  max-width: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    margin-top: ${baseUnits(0.5)};
  }
`

export default LogoMenuHeader
