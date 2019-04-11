import styled from "styled-components"

import { baseUnits } from "."

export const SmallTitle = styled.h4`
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 700;
`

export const MediumTitle = styled.h3`
  font-size: 1.66666rem;
  font-weight: 500;
  margin-bottom: ${baseUnits(0.5)};
`

export const LargeTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`

export const MediumParagraph = styled(MediumTitle)`
  padding-right: ${baseUnits(4)};
`
