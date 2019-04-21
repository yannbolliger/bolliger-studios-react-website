import React from "react"

import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"

const ProjectsSection = ({ textBlock }) => (
  <TextBlockSection textBlock={textBlock} color={colors.secondary} borderTop />
)

export default ProjectsSection
