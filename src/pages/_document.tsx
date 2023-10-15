import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* <script src="http://localhost:4001/remoteEntry.js" />
        <script src="http://localhost:5001/remoteEntry.js" /> */}
        <Head>
          <meta
            name="google-site-verification"
            content="KBgJmLjn6773WnejjhuVndDbj5330wVY-DXTpBtx0CE"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
