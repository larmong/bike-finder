import { AppProps } from "next/app";
import { GlobalStyle } from "../src/commons/style/global.style";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://bike-finder-app-699b665e59c7.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Head>
          <title>서울자전거 따릉이</title>
          <link
            rel="icon"
            href="https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Ffavicon.ico?alt=media&token=a9b39097-0d45-4a4a-9aaf-e2749d7afbcc"
          />
        </Head>
        <Global styles={GlobalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}
