import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/GlobalStyles";
import useFetch from "../lib/fetch";

export default function App({ Component, pageProps }: AppProps) {
  const movieData = useFetch("http://localhost:3000/api/");
  console.log(movieData);
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
