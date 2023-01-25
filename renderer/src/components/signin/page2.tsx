import { InputAdornment } from "@mui/material";
import Head from "next/head";
import * as P2S from "../../styles/signin/page2.styles";

interface IPropsSignInPage2 {
  onClickNextOrPrev: () => void;
}

export default function SignInPage2(props: IPropsSignInPage2) {
  return (
    <P2S.Wrapper>
      {/* 2page */}
      <P2S.InputWrapper>
        <P2S.Input label="이름"></P2S.Input>
        <P2S.Input
          label="키"
          InputProps={{
            endAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
        ></P2S.Input>
        <P2S.Input
          label="체중"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        ></P2S.Input>
      </P2S.InputWrapper>
      <P2S.BtnWrapper>
        <P2S.Btn onClick={props.onClickNextOrPrev}>이전</P2S.Btn>
        <P2S.SubmitBtn type="submit">가입</P2S.SubmitBtn>
      </P2S.BtnWrapper>
    </P2S.Wrapper>
  );
}
