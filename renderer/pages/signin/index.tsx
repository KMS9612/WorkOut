import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignInPage1 from "../../src/components/signin/page1";
import SignInPage2 from "../../src/components/signin/page2";
import PageStatus from "../../src/components/signin/PageStatus";
import { useAuth } from "../../src/firebase/hooks/Auth";
import * as yup from "yup";
import * as SS from "../../src/styles/signin/signin.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { IsLogin } from "../../src/recoilState/Auth/loginState";

export default function SignInPage() {
  // Next버튼을 누르면 Page2로 넘어가고 Prev버튼을 누르면 이전페이지로 돌아가게 만들기
  // 1page에선 가입하기버튼 대신 Next버튼 2page에선  Next대신 가입하기버튼
  const [isPage1, setIsPage1] = useState(true);
  const { createUser } = useAuth();
  const router = useRouter();
  const isLogin = useRecoilValue(IsLogin);

  const onClickNextOrPrev = () => {
    setIsPage1((prev) => !prev);
  };

  const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,15}$/;
  const schema = yup.object({
    email: yup.string().email("이메일 형식에 맞춰서 작성해 주세요").required("이메일을 입력 해 주세요"),
    password: yup
      .string()
      .min(5, "비밀번호는 5자 이상입니다.")
      .max(15, "비밀번호는 15자 이하입니다.")
      .matches(reg, "비밀번호는 영문,숫자,특수문자를 포함해야 합니다.")
      .required("비밀번호를 입력 해 주세요"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호를 다시 입력 해 주세요"),
    name: yup.string().required("이름을 입력 해 주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitSigninForm = handleSubmit(async (data) => {
    await createUser(data.email, data.password, data.name, data.height, data.weight);
  });
  return (
    <SS.Wrapper>
      <SS.Header variant="h3">SignIn</SS.Header>
      <SS.FormWrapper>
        <PageStatus isPage1={isPage1}></PageStatus>
        {isPage1 ? (
          <SignInPage1 onClickNextOrPrev={onClickNextOrPrev} register={register} errors={errors} />
        ) : (
          <SignInPage2 onClickNextOrPrev={onClickNextOrPrev} register={register} onSubmitSigninForm={onSubmitSigninForm} errors={errors} />
        )}
      </SS.FormWrapper>
    </SS.Wrapper>
  );
}
