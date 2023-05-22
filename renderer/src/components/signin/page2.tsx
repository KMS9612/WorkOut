import { InputAdornment } from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import * as P2S from "../../styles/signin/page2.styles";
import SigninDialog from "./dialog";

interface IPropsSignInPage2 {
  onClickNextOrPrev: () => void;
  register: UseFormRegister<FieldValues>;
  onSubmitSigninForm: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  errors: FieldErrors<FieldValues>;
}

export default function SignInPage2(props: IPropsSignInPage2) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <P2S.Wrapper>
      <SigninDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} onSubmitSigninForm={props.onSubmitSigninForm} />
      {/* 2page */}
      <P2S.InputWrapper>
        <P2S.Input label="이름" {...props.register("name")} error={props.errors.name?.message ? true : false} helperText={props.errors.name?.message?.toString()}></P2S.Input>
        <P2S.Input
          label="키"
          InputProps={{
            endAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
          {...props.register("height")}
        ></P2S.Input>
        <P2S.Input
          label="체중"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          {...props.register("weight")}
        ></P2S.Input>
      </P2S.InputWrapper>
      <P2S.BtnWrapper>
        <P2S.Btn onClick={props.onClickNextOrPrev}>이전</P2S.Btn>
        <P2S.SubmitBtn onClick={handleClickOpen}>가입</P2S.SubmitBtn>
      </P2S.BtnWrapper>
    </P2S.Wrapper>
  );
}
