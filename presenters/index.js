import { createGlobalStyle } from "styled-components"

const orange = "#FF9500"
const orangeLight = "#FFE4BD"
const blue = "#C9D4D6"
const blueLight = "#E3EAEB"

export const colors = {
  orange,
  orangeLight,
  blue,
  blueLight,
  primary: orange,
  secondary: blue
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Inter";
    font-size: 20px;
    line-height: 1.4;
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
