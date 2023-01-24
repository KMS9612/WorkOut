import { IPropsSignInPage1 } from "../../types/signin/page1.types";
import * as PS from "../../styles/signin/page1.styles";

export default function SignInPage1(props: IPropsSignInPage1) {
  return (
    <PS.Wrapper>
      <PS.InputWrapper component="form">
        <PS.Input label="이메일"></PS.Input>
        <PS.Input label="암호"></PS.Input>
        <PS.Input label="암호 확인"></PS.Input>
      </PS.InputWrapper>
      <PS.BtnWrapper>
        <PS.Btn onClick={props.onClickNextOrPrev}>다음</PS.Btn>
      </PS.BtnWrapper>
    </PS.Wrapper>
  );
}
