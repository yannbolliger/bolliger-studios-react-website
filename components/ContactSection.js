import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import { MediumTitle } from "../styled/typography"
import Button from "../styled/Button"
import ScrollLink from "../styled/ScrollLink"
import TextBlockSection from "./TextBlockSection"
import MailFormSection from "./MailFormSection"

const ContactSection = ({ textBlock, scrollRef }) => {
  const [isFormVisible, setFormVisible] = useState(false)
  const formRef = useRef(null)

  return (
    <>
      <TextBlockSection
        textBlock={textBlock}
        color={colors.primary}
        borderTop
        scrollRef={scrollRef}
      >
        <MediumTitle>
          <ScrollLink
            as="div"
            onClick={() => setFormVisible(true)}
            targetRef={formRef}
          >
            <Button>Email</Button>
          </ScrollLink>
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
