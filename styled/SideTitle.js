import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { baseUnits, breakpoints } from "."
import { SmallTitle } from "./typography"
import SplitView from "./SplitView"

const SideTitleSection = ({ title, children }) => (
  <SplitView>
    <SideMargin>
      <SmallTitle>{title}</SmallTitle>
    </SideMargin>
    {children}
  </SplitView>
)

export const SideMargin = styled.div`
  flex-shrink: 0;
  width: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: ${baseUnits(4)};
  }
`

SideTitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default SideTitleSection
