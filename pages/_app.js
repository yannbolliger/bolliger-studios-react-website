import React from "react"
import App, { Container } from "next/app"

import smoothscroll from "smoothscroll-polyfill"

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    // use Smooth scroll polyfill
    smoothscroll.polyfill()

    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
