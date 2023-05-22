import * as MR from "../../../styles/MyRoutine/MyRoutineList.styles";
import { MouseEvent, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useSetRecoilState } from "recoil";
import { ClickedRoutine } from "../../../recoilState/Routine/MyRoutine";
import { uuid } from "uuidv4";
import NoRoutine from "../../../common/NoRoutine";
import { IsDisabled } from "../../../recoilState/Routine/isDisabled";

export default function MyRoutineList() {
  const [RoutineList, setRoutineList] = useState([]);
  const setIsClick = useSetRecoilState(ClickedRoutine);
  const setDisabled = useSetRecoilState(IsDisabled);

  useEffect(() => {
    let RoutineData = JSON.parse(sessionStorage.getItem("routine") || "");
    if (RoutineData.length > 0) {
      setRoutineList(RoutineData);
      setDisabled(false);
    }
  }, []);

  const onClickMyRoutineList = (e: MouseEvent<HTMLDivElement>) => {
    setIsClick(e.currentTarget.tabIndex);
    sessionStorage.setItem("TodayRoutine", JSON.stringify(RoutineList[e.currentTarget.tabIndex]));
  };
  return (
    <MR.Wrapper component={Paper}>
      <MR.Top>
        <MR.Header variant="h4">루틴리스트</MR.Header>
      </MR.Top>
      {RoutineList.length > 0 ? (
        <MR.ListWrapper spacing={1}>
          {RoutineList.map((item, index) => (
            <MR.ListItem key={uuid()} elevation={2} tabIndex={index} onClick={onClickMyRoutineList} role="button">
              {item.title}
            </MR.ListItem>
          ))}
        </MR.ListWrapper>
      ) : (
        <NoRoutine Text={"생성한 루틴이 없습니다."} />
      )}
    </MR.Wrapper>
  );
}
