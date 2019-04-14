import React from "react"
import styled from "styled-components"
import { baseUnits } from "../styled"

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
  margin-top: ${baseUnits(0.5)};
  width: ${baseUnits(6.28)};
  max-width: 100%;
`

export default LogoMenuHeader
