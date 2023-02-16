import * as MR from "../../../styles/MyRoutine/MyRoutineList.styles";
import { MouseEvent, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useRecoilState } from "recoil";
import { ClickedRoutine } from "../../../recoilState/Routine/MyRoutine";

export default function MyRoutineList() {
  const [RoutineList, setRoutineList] = useState([]);
  const [isClick, setIsClick] = useRecoilState(ClickedRoutine);
  useEffect(() => {
    const RoutineData = JSON.parse(sessionStorage.getItem("routine") || "");
    setRoutineList(RoutineData);
  }, []);
  const onClickMyRoutineList = (e: MouseEvent<HTMLDivElement>) => {
    setIsClick(e.currentTarget.tabIndex);
    console.log(e.currentTarget.tabIndex);
  };
  return (
    <MR.Wrapper component={Paper}>
      <MR.Top>
        <MR.Header variant="h4">루틴리스트</MR.Header>
      </MR.Top>
      <MR.ListWrapper spacing={1}>
        {RoutineList.map((item, index) => (
          <MR.ListItem
            elevation={2}
            tabIndex={index}
            onClick={onClickMyRoutineList}
          >
            {item.title}
          </MR.ListItem>
        ))}
      </MR.ListWrapper>
    </MR.Wrapper>
  );
}
