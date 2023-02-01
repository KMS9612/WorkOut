import TodayTarget from "../../src/components/myPage/TodayTarget";
import UserInfo from "../../src/components/myPage/UserInfo";
import BasicTable from "../../src/components/myPage/UserRecord";
import * as MS from "../../src/styles/myPage/myPage.styles";

export default function MyPage() {
  return (
    <MS.Wrapper>
      <MS.Header variant="h3">WorkOut!</MS.Header>
      <MS.TopBox>
        <UserInfo />
        <TodayTarget />
      </MS.TopBox>
      <MS.UserRecord>
        <BasicTable />
      </MS.UserRecord>
    </MS.Wrapper>
  );
}
