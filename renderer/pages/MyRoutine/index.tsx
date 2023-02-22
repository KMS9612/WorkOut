import { Button } from "@mui/material";
import { useState } from "react";
import CurrentRoutine from "../../src/components/MyRoutine/currentRoutine/currentRoutine";
import MyRoutineDialog from "../../src/components/MyRoutine/dialog/dialog";
import MyRoutineList from "../../src/components/MyRoutine/MyRoutineList/MyRoutineList";
import YesterDayRoutine from "../../src/components/MyRoutine/yesterDayRoutine/yesterDayRoutine";
import useRoutine from "../../src/firebase/hooks/Routine";
import { Bottom, BtnWrapper, Wrapper, Top } from "../../src/styles/MyRoutine/MyRoutine.styles";
export default function MyRoutine() {
  const { UpdatePrevRoutine } = useRoutine();
  const [open, setOpen] = useState(false);

  const onClickCompleteTodayRoutine = async () => {
    const SaveTodayRoutine = JSON.parse(sessionStorage.getItem("TodayRoutine") || "");
    await UpdatePrevRoutine(SaveTodayRoutine);
    sessionStorage.setItem("prevRoutine", JSON.stringify(SaveTodayRoutine));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <MyRoutineDialog open={open} handleClose={handleClose} onClickCompleteTodayRoutine={onClickCompleteTodayRoutine} />
      <Top>
        <MyRoutineList />
        <YesterDayRoutine />
      </Top>
      <Bottom>
        <CurrentRoutine />
      </Bottom>
      <BtnWrapper>
        <Button tabIndex={10} onClick={handleClickOpen}>
          운동완료!
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}
