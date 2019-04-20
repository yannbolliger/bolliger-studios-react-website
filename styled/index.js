import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  mobile: "640px",
  medium: "950px"
}

const baseFontSize = 18 // in pixel

export const baseUnits = factor => {
  const remToUnitFactor = 2.7777777777
  const roundedToHalfPixel =
    Math.round(factor * remToUnitFactor * baseFontSize * 2) / 2.0

  return `${roundedToHalfPixel}px`
}

export const borderWidth = "3px"
export const borders = active =>
  active ? `solid ${colors.borderColor} ${borderWidth}` : `none`

export const colors = {
  borderColor: "#000",
  primary: "#FF9500",
  primaryLight: "#FFE4BD",
  secondary: "#C9D4D6",
  secondaryLight: "#E3EAEB"
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
    font-size: ${baseFontSize}px;
    font-weight: 400;
    line-height: 1.3333;
    background: ${colors.primary};
    overflow-x: hidden;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", "Inter", "Helvetica Neue", Arial, sans-serif;
    }
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    outline: none;
    text-decoration: none;
    color: inherit;
  }
`
