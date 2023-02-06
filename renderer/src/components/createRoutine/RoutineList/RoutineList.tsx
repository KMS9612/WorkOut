import * as LS from "../../../styles/createRoutine/RoutineList.styles";
import Paper from "@mui/material/Paper";

export default function RoutineList() {
  return (
    <LS.Wrapper component={Paper}>
      <LS.Top>
        <LS.Header variant="h4">루틴리스트</LS.Header>
      </LS.Top>
      <LS.ListWrapper spacing={1}>
        <LS.ListItem elevation={2}>asdsd</LS.ListItem>
        <LS.ListItem elevation={2}>asdsd</LS.ListItem>
      </LS.ListWrapper>
    </LS.Wrapper>
  );
}
