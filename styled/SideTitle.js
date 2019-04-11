import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { baseUnits } from "."
import { SmallTitle } from "./typography"

const SideTitleWrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;
`

const TitleWithMargin = styled(SmallTitle)`
  width: ${baseUnits(4)};
  flex-shrink: 0;
`

const SideTitleSection = ({ title, children }) => (
  <SideTitleWrapper>
    <TitleWithMargin>{title}</TitleWithMargin>
    {children}
  </SideTitleWrapper>
)

SideTitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default SideTitleSection
