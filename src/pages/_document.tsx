import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="./logo.png" type="image/png" />
        <title>Clone Instagram</title>
      </Head>
      <body className='bg-zinc-100 h-screen overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
