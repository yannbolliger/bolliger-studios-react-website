import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import { MediumTitle } from "../styled/typography"
import Button from "../styled/Button"
import TextBlockSection from "./TextBlockSection"
import MailFormSection from "./MailFormSection"

const ContactSection = ({ textBlock, scrollRef }) => {
  const [isFormVisible, setFormVisible] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [isFormVisible])

  return (
    <>
      <TextBlockSection
        textBlock={textBlock}
        color={colors.primary}
        borderTop
        scrollRef={scrollRef}
      >
        <MediumTitle>
          <Button onClick={() => setFormVisible(true)}>Email</Button>
        </MediumTitle>
      </TextBlockSection>

      {isFormVisible && (
        <MailFormSection
          scrollRef={formRef}
          onCloseClick={() => setFormVisible(false)}
        />
      )}
    </>
  )
}

ContactSection.propTypes = {
  textBlock: PropTypes.object,
  scrollRef: PropTypes.object.isRequired
}

export default ContactSection
