import styled from "@emotion/styled";
import Head from "next/head";
import { useState } from "react";
import SignInPage1 from "../../src/components/signin/page1";
import SignInPage2 from "../../src/components/signin/page2";
import PageStatus from "../../src/components/signin/PageStatus";
import * as SS from "../../src/styles/signin/signin.styles";

export default function SignInPage() {
  // Next버튼을 누르면 Page2로 넘어가고 Prev버튼을 누르면 이전페이지로 돌아가게 만들기
  // 1page에선 가입하기버튼 대신 Next버튼 2page에선  Next대신 가입하기버튼
  const [isPage1, setIsPage1] = useState(true);

  const onClickNextOrPrev = () => {
    setIsPage1((prev) => !prev);
  };

  return (
    <SS.Wrapper>
      <SS.Header variant="h3">SignIn</SS.Header>
      <SS.FormWrapper>
        <PageStatus isPage1={isPage1}></PageStatus>
        {isPage1 ? <SignInPage1 onClickNextOrPrev={onClickNextOrPrev} /> : <SignInPage2 onClickNextOrPrev={onClickNextOrPrev} />}
      </SS.FormWrapper>
    </SS.Wrapper>
  );
}
