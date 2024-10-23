import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render () {
        return (
          <Html lang="en">
            <Head>
					    <meta name='description' content='afkdev8 Portfolio Page - This page presents my work and posts about stuff that I find intersting (AI, mechanical keyboards,...).' />
              <meta name="google-site-verification" content="aMWeTQTDOoDHXfcjaJe0iA9VUVS58X1XFOPD-A8xg7o" />
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
