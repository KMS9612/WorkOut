import * as US from "../../styles/myPage/UserInfo.styles";

export default function UserInfo() {
  return (
    <US.Wrapper elevation={4}>
      <US.Header variant="h4">***'s Info</US.Header>

      <US.InfoBox>유저 이름,키,몸무게,나이,</US.InfoBox>
    </US.Wrapper>
  );
}
