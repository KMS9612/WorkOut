import Head from "next/head";

import * as LS from "../../src/styles/login/login.styles";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login - WorkOut</title>
      </Head>
      <LS.Header variant="h3">Work Out!</LS.Header>
      <LS.Wrapper>
        <LS.InputWrapper component="div">
          <LS.Input type="text" label="로그인" autoFocus />
          <LS.Input type="password" label="비밀번호" />
        </LS.InputWrapper>
        <LS.BtnWrapper spacing={1}>
          <LS.LoginBtn variant="contained">로그인</LS.LoginBtn>
          <LS.SignInBtn>회원가입</LS.SignInBtn>
        </LS.BtnWrapper>
      </LS.Wrapper>
    </div>
  );
}
