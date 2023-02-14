import { useForm } from "react-hook-form";
import * as LS from "../../../styles/createRoutine/RoutineList.styles";
import useRoutine from "../../../firebase/hooks/Routine";
import Paper from "@mui/material/Paper";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ClickedRoutine } from "../../../recoilState/Routine/createRoutine";

export default function RoutineList() {
  const [clickedRoutine, setClickedRoutine] = useRecoilState(ClickedRoutine);
  const [routines, setRoutines] = useState([]);
  const { createRoutine } = useRoutine();
  const { register, handleSubmit } = useForm();
  // 첫 접속시 루틴리스트를 표시하기 위한 useEffect
  useEffect(() => {
    setRoutines(JSON.parse(sessionStorage.getItem("routine") || ""));
  }, []);
  // 루틴을 1개 추가하기 위한 함수
  const onSubmitCreateRoutine = handleSubmit(async (data) => {
    await createRoutine(data.title);
    const Routine = JSON.parse(sessionStorage.getItem("routine") || "");
    setRoutines(Routine);
  });

  const onClickRoutineTitle = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.tabIndex);
    setClickedRoutine(event.currentTarget.tabIndex);
  };
  return (
    <LS.Wrapper component={Paper}>
      <LS.FormBox onSubmit={onSubmitCreateRoutine}>
        <LS.Top>
          <LS.Header variant="h4">루틴리스트</LS.Header>
        </LS.Top>
        <LS.InputWrapper>
          <LS.Input label="루틴 이름" {...register("title")}></LS.Input>
          <LS.SubmitBtn type="submit">추가</LS.SubmitBtn>
        </LS.InputWrapper>
        <LS.ListWrapper spacing={1}>
          {routines.map((item: any, index: number) => (
            <LS.ListItem key={item.title} elevation={2} tabIndex={index} onClick={onClickRoutineTitle}>
              {item.title}
            </LS.ListItem>
          ))}
        </LS.ListWrapper>
      </LS.FormBox>
    </LS.Wrapper>
  );
}
