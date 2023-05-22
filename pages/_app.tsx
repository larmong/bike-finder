import Head from "next/head";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/style/global.style";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>서울자전거 따릉이</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
