import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from "react";


export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="sl">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>

          <meta name="title" content="WebDev TLDR;"/>
          <meta name="description" content="Povzetki o pomembnih temah CSS, HTML."/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://webdev-tldr.vercel.app/"/>
          <meta property="og:title" content="WebDev TLDR;"/>
          <meta property="og:description" content="Povzetki o pomembnih temah CSS, HTML."/>
          <meta property="og:image" content="/thumbnail.png"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://webdev-tldr.vercel.app/"/>
          <meta property="twitter:title" content="WebDev TLDR;"/>
          <meta property="twitter:description" content="Povzetki o pomembnih temah CSS, HTML."/>
          <meta property="twitter:image" content="/thumbnail.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
