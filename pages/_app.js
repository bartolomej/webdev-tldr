import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components'
import dynamic from "next/dynamic";
import "../styles/font.css"
import Layout from "../components/Layout";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";

export default function App({ Component, pageProps }) {
  const ReactTooltip = dynamic(() => import("react-tooltip"), {ssr: false})
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <ReactTooltip />
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  )
}
