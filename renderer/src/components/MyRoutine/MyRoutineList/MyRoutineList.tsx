import * as MR from "../../../styles/MyRoutine/MyRoutineList.styles";
import Paper from "@mui/material/Paper";

export default function MyRoutineList() {
  return (
    <MR.Wrapper component={Paper}>
      <MR.Top>
        <MR.Header variant="h4">루틴리스트</MR.Header>
      </MR.Top>
      <MR.ListWrapper spacing={1}>
        <MR.ListItem elevation={2}>생성된 루틴 리스트</MR.ListItem>
        <MR.ListItem elevation={2}>생성된 루틴 리스트</MR.ListItem>
      </MR.ListWrapper>
    </MR.Wrapper>
  );
}
