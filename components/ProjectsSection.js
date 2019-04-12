import React from "react"

import { useApiData } from "../api"
import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"
import SplitView from "../styled/SplitView"

const ProjectsSection = ({ textBlock }) => (
  <TextBlockSection textBlock={textBlock} color={colors.secondary} borderTop />
)

export default ProjectsSection
