import React, { useState } from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import { MediumTitle } from "../styled/typography"
import Button from "../styled/Button"
import TextBlockSection from "./TextBlockSection"
import MailFormSection from "./MailFormSection"

const ContactSection = ({ textBlock }) => {
  const [isFormVisible, setFormVisible] = useState(false)

  return (
    <>
      <TextBlockSection textBlock={textBlock} color={colors.primary} borderTop>
        <MediumTitle>
          <Button onClick={() => setFormVisible(true)}>Email</Button>
        </MediumTitle>
      </TextBlockSection>

      {isFormVisible && (
        <MailFormSection onCloseClick={() => setFormVisible(false)} />
      )}
    </>
  )
}

ContactSection.propTypes = {
  textBlock: PropTypes.object
}

export default ContactSection
