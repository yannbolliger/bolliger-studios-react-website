import React from "react"
import styled from "styled-components"
import { baseUnits } from "../styled"

import Container from "../styled/Container"

const LogoMenuHeader = () => (
  <Container>
    <Logo src="static/BST-Logo.svg" />
  </Container>
)

const Logo = styled.img`
  max-width: ${baseUnits(6.28)};
`

export default LogoMenuHeader
