import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ScrollLink = props => {
  const onClick = event => {
    event.preventDefault()
    if (props.onClick) props.onClick()

    setTimeout(
      () => props.targetRef.current.scrollIntoView({ behavior: "smooth" }),
      100
    )
  }

  return (
    <Link {...props} onClick={onClick}>
      {props.children}
    </Link>
  )
}

const Link = styled.a`
  cursor: pointer;
`

ScrollLink.propTypes = {
  targetRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default ScrollLink
