import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Button, ButtonBase, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionCache from "../lib/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { app } from "electron";

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

const BtnWrapper = styled(Box)`
  width: 100px;
  height: 100px;
`;
export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

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
