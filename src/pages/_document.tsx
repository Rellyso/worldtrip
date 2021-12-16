import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, NextScript, Main } from 'next/document'

import theme from '../styles/theme'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="shortcut icon" href="/assets/airplane.svg" type="image/svg" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}