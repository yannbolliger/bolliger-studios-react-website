import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors } from "../styled"
import { MediumTitle } from "../styled/typography"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import TextBlockSection from "./TextBlockSection"
import MailForm from "./MailForm"

const ContactSection = ({ textBlock }) => {
  const [isFormVisible, setFormVisible] = useState(false)

  return (
    <>
      <TextBlockSection textBlock={textBlock} color={colors.primary} borderTop>
        <MediumTitleButton onClick={() => setFormVisible(true)}>
          &rarr; Email
        </MediumTitleButton>
      </TextBlockSection>

      {isFormVisible && (
        <Container color={colors.primaryLight} borderTop>
          <Cross onClick={() => setFormVisible(false)} />
          <MailForm />
        </Container>
      )}
    </>
  )
}

const MediumTitleButton = styled(MediumTitle)`
  cursor: pointer;
`

ContactSection.propTypes = {
  textBlock: PropTypes.object
}

export default ContactSection
