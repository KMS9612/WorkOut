import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../src/firebase/hooks/Auth";
import { useRecoilState } from "recoil";
import * as LS from "../../src/styles/login/login.styles";
import { LoginError } from "../../src/recoilState/Auth/loginState";

export default function LoginPage() {
  const router = useRouter();
  const [err, setErr] = useRecoilState(LoginError);
  const { register, handleSubmit } = useForm();

  const onClickRouting = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(event.currentTarget.name);
  };

  const { Login } = useAuth();

  const onClickLogin = handleSubmit((data) => {
    Login(data.email, data.password);
  });

  return (
    <LS.Wrapper onSubmit={onClickLogin}>
      <LS.Header variant="h3">Work Out!</LS.Header>
      <LS.InputWrapper component="div">
        <LS.Input type="text" label="이메일" autoFocus {...register("email")} />
        <LS.Input type="password" label="비밀번호" {...register("password")} />
        {err ? (
          <LS.Err>로그인 실패! 아이디와 비밀번호를 확인해 주세요</LS.Err>
        ) : null}
      </LS.InputWrapper>
      <LS.BtnWrapper spacing={1}>
        <LS.LoginBtn type="submit" variant="contained">
          로그인
        </LS.LoginBtn>
        <LS.SignInBtn type="button" name="/signin" onClick={onClickRouting}>
          회원가입
        </LS.SignInBtn>
      </LS.BtnWrapper>
    </LS.Wrapper>
  );
}
