import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionCache from "../lib/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { auth } from "../src/firebase/firebase.config";
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      // 로그인 여부 확인
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // 이미 인증된 경우, 다시 인증하지 않도록 함
          return;
        } else {
          // 로그인이 필요한 경우 로그인 페이지로 이동
          router.push("/login");
        }
      });
    });
  }, []);
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1.0, initial-scale=1.0, width=device-width" />
        <title>WorkOut!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          size="small"
          style={{ position: "fixed" }}
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeftIcon />
        </Button>

        <Wrapper>
          <CssBaseline />
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Wrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}
