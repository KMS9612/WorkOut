import Head from "next/head";
import { styled } from "@mui/material";
import * as HS from "../src/styles/home/home.styles";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

function Home() {
  return (
    <>
      <Head>
        <title>Home - WorkOut</title>
      </Head>
      <Root>
        <HS.Wrapper>
          <HS.Header variant="h2">WorkOut!</HS.Header>
        </HS.Wrapper>
      </Root>
    </>
  );
}

export default Home;
