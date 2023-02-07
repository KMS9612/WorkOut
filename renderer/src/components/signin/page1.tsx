import { IPropsSignInPage1 } from "../../types/signin/page1.types";
import * as P1S from "../../styles/signin/page1.styles";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment } from "@mui/material";

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
      <P1S.InputWrapper>
        <P1S.Input label="이메일" type="email" {...props.register("email")} error={props.errors.email?.message ? true : false} helperText={props.errors.email?.message?.toString()}></P1S.Input>

        <P1S.Input
          label="암호"
          type={isShow ? "text" : "password"}
          {...props.register("password")}
          error={props.errors.password?.message ? true : false}
          helperText={props.errors.password?.message?.toString()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <P1S.VisibilityBtn onClick={onClickShowPassword}>{isShow ? <VisibilityOff htmlColor="#ff8375"></VisibilityOff> : <Visibility htmlColor="#ff8375"></Visibility>}</P1S.VisibilityBtn>
              </InputAdornment>
            ),
          }}
        ></P1S.Input>

        <P1S.Input
          label="암호확인"
          type={isShowCheck ? "text" : "password"}
          {...props.register("passwordCheck")}
          error={props.errors.passwordCheck?.message ? true : false}
          helperText={props.errors.passwordCheck?.message?.toString()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <P1S.VisibilityBtn onClick={onClickShowPasswordCheck}>
                  {isShowCheck ? <VisibilityOff htmlColor="#ff8375"></VisibilityOff> : <Visibility htmlColor="#ff8375"></Visibility>}
                </P1S.VisibilityBtn>
              </InputAdornment>
            ),
          }}
        ></P1S.Input>
      </P1S.InputWrapper>
      <P1S.BtnWrapper>
        <P1S.Btn onClick={props.onClickNextOrPrev}>다음</P1S.Btn>
      </P1S.BtnWrapper>
    </P1S.Wrapper>
  );
}
