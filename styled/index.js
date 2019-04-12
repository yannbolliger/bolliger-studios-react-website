import { createGlobalStyle } from "styled-components"

const orange = "#FF9500"
const orangeLight = "#FFE4BD"
const blue = "#C9D4D6"
const blueLight = "#E3EAEB"
const black = "#000"

export const colors = {
  borderColor: black,
  primary: orange,
  primaryLight: orangeLight,
  secondary: blue,
  secondaryLight: blueLight
}

const baseFontSize = 18 // in pixel
export const baseUnits = factor => `${factor * 2.77777777 * baseFontSize}px`
export const borderWidth = "3px"

export const borders = active =>
  active ? `solid ${colors.borderColor} ${borderWidth}` : `none`

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
