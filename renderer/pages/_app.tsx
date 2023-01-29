import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionCache from "../lib/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const Wrapper = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>WorkOut!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeftIcon />
        </Button>
        <Wrapper>
          <CssBaseline />
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}
