import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, baseUnits } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Cross from "../styled/Cross"

const Menu = ({ titles, onClose }) => (
  <Container borderBottom color={colors.primaryLight}>
    <SplitViewPadding>
      <div>
        {titles.map(title => (
          <ScrollLinks key={title}>{title}</ScrollLinks>
        ))}
      </div>
      <Cross onClick={onClose} />
    </SplitViewPadding>
  </Container>
)

const SplitViewPadding = styled(SplitView)`
  flex-wrap: nowrap;
  padding: ${baseUnits(0.5)} 0;
  justify-content: space-between;
`

const ScrollLinks = styled.a`
  display: inline-block;
  margin-right: ${baseUnits(1)};
`

Menu.propTypes = {
  titles: PropTypes.object.isRequired,
  onClose: PropTypes.func
}

export default Menu
