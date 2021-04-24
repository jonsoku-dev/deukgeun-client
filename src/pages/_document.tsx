import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.css"
            integrity="sha512-oCMe0gk4MRWD41q3DdT0Aa5r7a7XyKd8bqbpzaVPsuR+cXzwG/mexuuMdTfQPLLw0vLdYN6umSRYokROXCfZPA=="
            crossOrigin="anonymous"
          />
          <meta property="keywords" content="블로그, 커뮤니티, 웹개발" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="타마스터디" />
          <meta property="og:description" content="타마스터디 사이트입니다." />
          <meta property="og:url" content="https://tamastudy.com" />
          <meta
            property="og:image"
            content="https://papers.co/wallpaper/papers.co-ba78-line-chractor-cute-brown-illustration-art-35-3840x2160-4k-wallpaper.jpg"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
