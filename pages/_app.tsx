import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>🎬 Movie Flip 🎬</title>
        <meta
          name="Movie Flip"
          content="Die beste Adresse für schnelle Filmempfehlungen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
