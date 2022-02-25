import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps}/>
  </>;
}

export default MyApp;
