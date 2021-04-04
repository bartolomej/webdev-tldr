import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import dynamic from "next/dynamic";
import "../font.css"
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    max-width: ${({ theme }) => theme.constants.containerWidth};
    margin: auto;
  }
  
  section {
    margin-bottom: 50px;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;

    td.title {
      font-weight: bold;
    }

    td {
      padding: 5px;
      border: 2px solid ${({ theme }) => theme.colors.light};
    }
  }

  h1, h2, p {
    color: ${({ theme }) => theme.colors.dark};
  }

  p {
    line-height: 1.4rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  details {
    padding: 10px;

    summary {
      outline: none;
      cursor: pointer;
      user-select: none;
    }

    & > div {
      margin-top: 20px;
    }
  }

  h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
  }

  code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    font-size: 12px;
    padding: 3px;
    border-radius: ${({ theme }) => theme.constants.smBorderRadius};
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
  }

  *[data-tip] {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.dark};
    cursor: help;
  }
`

const theme = {
  colors: {
    // TODO: change colors
    primary: '#444CF7',
    secondary: '#EB5E55',
    dark: '#3A3335',
    light: '#F1F2EB'
  },
  constants: {
    smBorderRadius: '8px',
    containerWidth: '700px',
  },
  styles: {
    boxShadow: (focused) => `-1px 1px ${focused ? '50px' : '30px'} -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%)`
  }
}

export default function App({ Component, pageProps }) {
  const ReactTooltip = dynamic(() => import("react-tooltip"), {ssr: false})
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReactTooltip />
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
