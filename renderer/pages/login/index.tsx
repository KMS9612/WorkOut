import Head from "next/head";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

import * as LS from "../../src/styles/login/login.styles";

export default function LoginPage() {
  const router = useRouter();
  const onClickRouting = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(event.currentTarget.name);
  };
  return (
    <div>
      <LS.Header variant="h3">Work Out!</LS.Header>
      <LS.Wrapper>
        <LS.InputWrapper component="div">
          <LS.Input type="text" label="로그인" autoFocus />
          <LS.Input type="password" label="비밀번호" />
        </LS.InputWrapper>
        <LS.BtnWrapper spacing={1}>
          <LS.LoginBtn name="/backGround" onClick={onClickRouting} variant="contained">
            로그인
          </LS.LoginBtn>
          <LS.SignInBtn name="/signin" onClick={onClickRouting}>
            회원가입
          </LS.SignInBtn>
        </LS.BtnWrapper>
      </LS.Wrapper>
    </div>
  );
}
