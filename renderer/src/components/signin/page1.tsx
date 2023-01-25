import { IPropsSignInPage1 } from "../../types/signin/page1.types";
import * as P1S from "../../styles/signin/page1.styles";
import { MouseEvent, useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignInPage1(props: IPropsSignInPage1) {
  const [isShow, setIsShow] = useState(false);
  const [isShowCheck, setIsShowCheck] = useState(false);
  const onClickShowPassword = () => {
    setIsShow((show) => !show);
  };

  const onClickShowPasswordCheck = () => {
    setIsShowCheck((show) => !show);
  };
  return (
    <P1S.Wrapper>
      <P1S.InputWrapper component="form">
        <P1S.Input label="이메일" type="email"></P1S.Input>
        <P1S.PasswordBox>
          <P1S.Input label="암호" type={isShow ? "text" : "password"}></P1S.Input>
          <P1S.VisibilityBtn onClick={onClickShowPassword}>{isShow ? <VisibilityOff htmlColor="#ff8375"></VisibilityOff> : <Visibility htmlColor="#ff8375"></Visibility>}</P1S.VisibilityBtn>
        </P1S.PasswordBox>
        <P1S.PasswordBox>
          <P1S.Input label="암호확인" type={isShowCheck ? "text" : "password"}></P1S.Input>
          <P1S.VisibilityBtn onClick={onClickShowPasswordCheck}>{isShowCheck ? <VisibilityOff htmlColor="#ff8375"></VisibilityOff> : <Visibility htmlColor="#ff8375"></Visibility>}</P1S.VisibilityBtn>
        </P1S.PasswordBox>
      </P1S.InputWrapper>
      <P1S.BtnWrapper>
        <P1S.Btn onClick={props.onClickNextOrPrev}>다음</P1S.Btn>
      </P1S.BtnWrapper>
    </P1S.Wrapper>
  );
}
