import styled from "styled-components"

import { breakpoints } from "."

const SplitView = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-flow: row nowrap;
  }
`

export default SplitView
