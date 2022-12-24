import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="theme-color" content="#2563eb" />

          <link rel="icon" href="/favicon.ico" />

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="shortcut icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {process.env.NODE_ENV !== "development" &&
            process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`,
                }}
              />
            )}

          <meta
            name="keywords"
            content="locking wheel nut removal, mobile locking wheel nut removal, locking wheel bolt removal, locking wheel bolt removal, lock nut removal, locking wheel nut removal service, locknut remover, locking wheel nut remover, lock wheel nut removal services, "
          />
        </Head>

        <body>
          {process.env.NODE_ENV !== "development" &&
            process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
              ></noscript>
            )}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
