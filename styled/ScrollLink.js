import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ScrollLink = props => {
  const [isClicked, setClicked] = useState(false)

  const onClick = event => {
    event.preventDefault()
    if (props.onClick) props.onClick()
    setClicked(true)
  }

  useEffect(() => {
    if (isClicked && props.targetRef.current) {
      props.targetRef.current.scrollIntoView({ behavior: "smooth" })
      setClicked(false)
    }
  }, [isClicked])

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
