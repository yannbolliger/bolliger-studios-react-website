import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { baseUnits } from "."
import { SmallTitle } from "./typography"
import SplitView from "./SplitView"

export const SideMargin = styled.div`
  width: ${baseUnits(4)};
  flex-shrink: 0;
`

const SideTitleSection = ({ title, children }) => (
  <SplitView>
    <SideMargin>
      <SmallTitle>{title}</SmallTitle>
    </SideMargin>
    {children}
  </SplitView>
)

SideTitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default SideTitleSection
