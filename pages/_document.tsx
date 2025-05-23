export {};
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap`} rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
