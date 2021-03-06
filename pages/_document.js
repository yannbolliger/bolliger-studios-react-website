import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

import { GlobalStyle, colors, fetchFontCss } from "../styled"

export default class extends Document {
  /**
   * from styled-components example of next.js App
   */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      const fontCssString = await fetchFontCss()

      return {
        ...initialProps,
        fontCssString,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render = () => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <style dangerouslySetInnerHTML={{ __html: this.props.fontCssString }} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="static/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="static/favicon/safari-pinned-tab.svg"
          color={colors.primary}
        />
        <meta name="apple-mobile-web-app-title" content="Bolliger Studios" />
        <meta name="application-name" content="Bolliger Studios" />
        <meta name="msapplication-TileColor" content={colors.primary} />
        <meta name="theme-color" content={colors.primary} />
      </Head>
      <body>
        <GlobalStyle />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
