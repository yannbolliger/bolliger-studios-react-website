import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Cross from "../styled/Cross"
import ScrollLink from "../styled/ScrollLink"

const Menu = ({ sections, onClose }) => (
  <Container borderBottom color={colors.primaryLight}>
    <SplitViewPadding>
      <LinkWrapper>
        {sections.map(section => (
          <ScrollLinkWithMargin targetRef={section.ref} key={section.id}>
            {section.textBlock.title}
          </ScrollLinkWithMargin>
        ))}
      </LinkWrapper>

      <Cross onClick={onClose} />
    </SplitViewPadding>
  </Container>
)

const SplitViewPadding = styled(SplitView)`
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding: ${baseUnits(0.5)} 0;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-flow: row nowrap;
  }
`

const ScrollLinkWithMargin = styled(ScrollLink)`
  margin: 0;
  margin-bottom: ${baseUnits(0.25)};

  @media screen and (min-width: ${breakpoints.mobile}) {
    margin: 0;
    margin-right: ${baseUnits(1)};
  }
`

Menu.propTypes = {
  sections: PropTypes.array.isRequired,
  onClose: PropTypes.func
}

export default Menu
