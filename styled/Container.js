import styled from "styled-components"
import { colors, borders, baseUnits } from "."

const Container = styled.div`
  display: flex;
  width: 100%;

  padding: ${baseUnits(0.5)} ${baseUnits(1)};

  background-color: ${props => props.color || colors.primary};
  border-top: ${props => borders(props.borderTop)};
  border-bottom: ${props => borders(props.borderBottom)};
`
export default Container
