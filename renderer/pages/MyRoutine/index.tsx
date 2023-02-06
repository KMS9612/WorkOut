import { Button } from "@mui/material";
import CurrentRoutine from "../../src/components/MyRoutine/currentRoutine/currentRoutine";
import MyRoutineList from "../../src/components/MyRoutine/MyRoutineList/MyRoutineList";
import YesterDayRoutine from "../../src/components/MyRoutine/yesterDayRoutine/yesterDayRoutine";
import { Bottom, BtnWrapper, Wrapper, Top } from "../../src/styles/MyRoutine/MyRoutine.styles";
export default function MyRoutine() {
  return (
    <Wrapper>
      <Top>
        <MyRoutineList />
        <YesterDayRoutine />
      </Top>
      <Bottom>
        <CurrentRoutine />
      </Bottom>
      <BtnWrapper>
        <Button>완료</Button>
      </BtnWrapper>
    </Wrapper>
  );
}
