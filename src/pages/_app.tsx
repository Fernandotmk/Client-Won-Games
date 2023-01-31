import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

import GlobalStyles from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/icon-512.png"></link>
          <link rel="apple-touch-icon" href="/img/icon-512.png"></link>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A project starter to work with Typescript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
