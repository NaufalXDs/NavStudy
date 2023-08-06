import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html data-theme="lemonade">
        <Head>
          <script src="https://kit.fontawesome.com/7702a3a340.js" crossOrigin="anonymous"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/7702a3a340.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./node_modules/preline/dist/preline.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
