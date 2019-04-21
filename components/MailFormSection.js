import React from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import SplitView from "../styled/SplitView"
import { SideMargin } from "../styled/SideTitle"
import MailForm from "./MailForm"

const MailFormSection = ({ onCloseClick }) => (
  <Container color={colors.primaryLight} borderTop>
    <SplitView>
      <SideMargin>
        <Cross onClick={onCloseClick} />
      </SideMargin>

      <MailForm />
    </SplitView>
  </Container>
)

MailFormSection.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default MailFormSection
