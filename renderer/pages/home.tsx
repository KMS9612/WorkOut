import Head from "next/head";
import { styled } from "@mui/material";
import * as HS from "../src/styles/home/home.styles";
import { MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { IsLogin } from "../src/recoilState/Auth/loginState";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
  };
});

function Home() {
  const router = useRouter();

  const isLogin = useRecoilValue(IsLogin);

  useEffect(() => {
    if (isLogin) {
      router.push("backGround");
    }
  }, []);

  const onClickRouting = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(event.currentTarget.name);
  };
  return (
    <>
      <Head>
        <title>Home - WorkOut</title>
      </Head>
      <Root>
        <HS.Wrapper>
          <HS.Header variant="h2">WorkOut!</HS.Header>
          <HS.BtnWrapper>
            <HS.ToLogin name="login" onClick={onClickRouting}>
              로그인
            </HS.ToLogin>
            <HS.ToSignin name="signin" onClick={onClickRouting}>
              회원가입
            </HS.ToSignin>
          </HS.BtnWrapper>
        </HS.Wrapper>
      </Root>
    </>
  );
}

export default Home;
