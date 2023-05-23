import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionCache from "../lib/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { auth } from "../src/firebase/firebase.config";
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import Layout from "../src/layout/Home";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1.0, initial-scale=1.0, width=device-width" />
        <title>WorkOut!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <CssBaseline />
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </Wrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}
