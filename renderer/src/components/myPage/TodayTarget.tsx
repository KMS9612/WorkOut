import * as TS from "../../styles/myPage/TodayTarget.styles";

export default function TodayTarget() {
  return (
    <TS.Wrapper elevation={4}>
      <TS.Header variant="h4">Today's Target</TS.Header>
      <TS.TargetBox>
        지정한 프로그램이 없다면 프로그램 생성 버튼 노출 프로그램에 따라 로직이 달라져야 함 <br /> 성공버튼을 누르면 +a 로 기록 아니면 이전 기록 그대로 기록
      </TS.TargetBox>
    </TS.Wrapper>
  );
}
