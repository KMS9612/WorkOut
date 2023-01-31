import * as MS from "../../src/styles/myPage/myPage.styles";

export default function MyPage() {
  return (
    <MS.Wrapper>
      <MS.Header variant="h3">WorkOut!</MS.Header>
      <MS.TopBox>
        <MS.UserInfo>
          UserInfo <br />
          유저 이름,키,몸무게,나이,
        </MS.UserInfo>
        <MS.ProgramBox>
          program <br /> 오늘 진행할 운동 <br />
          프로그램에 따라 로직이 달라져야 함 <br /> 성공버튼을 누르면 +a 로 기록
          아니면 이전 기록 그대로 기록
        </MS.ProgramBox>
      </MS.TopBox>
      <MS.UserRecord>
        <span>UserRecordList</span>{" "}
        <span>
          <button>신규 프로젝트 생성</button>
          버튼을 누르면 현재 프로젝트를 그만두고 새로운 프로젝트를 제작할지
          물어보는 Modal이 나옴
        </span>
        <br /> 이전 운동기록 리스트형식{" "}
      </MS.UserRecord>
    </MS.Wrapper>
  );
}
