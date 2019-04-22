import React from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"

const ProjectsSection = ({ textBlock, scrollRef }) => (
  <TextBlockSection
    textBlock={textBlock}
    color={colors.secondary}
    borderTop
    scrollRef={scrollRef}
  />
)

ProjectsSection.propTypes = {
  textBlock: PropTypes.object,
  scrollRef: PropTypes.object.isRequired
}

export default ProjectsSection
