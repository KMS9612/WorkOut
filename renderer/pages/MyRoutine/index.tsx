import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CurrentRoutine from "../../src/components/MyRoutine/currentRoutine/currentRoutine";
import MyRoutineDialog from "../../src/components/MyRoutine/dialog/dialog";
import MyRoutineList from "../../src/components/MyRoutine/MyRoutineList/MyRoutineList";
import YesterDayRoutine from "../../src/components/MyRoutine/yesterDayRoutine/yesterDayRoutine";
import useRoutine from "../../src/firebase/hooks/Routine";
import {
  Bottom,
  BtnWrapper,
  Wrapper,
  Top,
} from "../../src/styles/MyRoutine/MyRoutine.styles";
import { useRecoilValue } from "recoil";
import { IsDisabled } from "../../src/recoilState/Routine/isDisabled";

export default function MyRoutine() {
  const { UpdatePrevRoutine } = useRoutine();
  const [open, setOpen] = useState(false);
  const [PrevRoutine, setPrevRoutine] = useState<any>([]);
  const isDisabled = useRecoilValue(IsDisabled);

  useEffect(() => {
    const prevRoutineData = JSON.parse(
      sessionStorage.getItem("prevRoutine") || ""
    );
    if (prevRoutineData !== "") {
      setPrevRoutine(prevRoutineData);
    }
  }, []);

  const onClickCompleteTodayRoutine = async () => {
    const SaveTodayRoutine = JSON.parse(
      sessionStorage.getItem("TodayRoutine") || ""
    );
    await UpdatePrevRoutine(SaveTodayRoutine);
    setPrevRoutine(SaveTodayRoutine);
    handleDialogTrigger();
  };

  const handleDialogTrigger = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <MyRoutineDialog
        open={open}
        handleDialogTrigger={handleDialogTrigger}
        onClickCompleteTodayRoutine={onClickCompleteTodayRoutine}
      />
      <Top>
        <MyRoutineList />
        <YesterDayRoutine PrevRoutine={PrevRoutine} />
      </Top>
      <Bottom>
        <CurrentRoutine />
      </Bottom>
      <BtnWrapper>
        <Button
          tabIndex={10}
          onClick={handleDialogTrigger}
          disabled={isDisabled}
        >
          운동완료!
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}
