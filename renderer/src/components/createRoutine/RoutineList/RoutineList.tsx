import { useForm } from "react-hook-form";
import * as LS from "../../../styles/createRoutine/RoutineList.styles";
import useRoutine from "../../../firebase/hooks/Routine";
import Paper from "@mui/material/Paper";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ClickedRoutine, Routines } from "../../../recoilState/Routine/createRoutine";
import { uuid } from "uuidv4";
import NoRoutine from "../../../common/NoRoutine";

export default function RoutineList() {
  const [clickedRoutine, setClickedRoutine] = useRecoilState(ClickedRoutine);
  const [routines, setRoutines] = useRecoilState<any>(Routines);
  const { createRoutine, DeleteRoutine } = useRoutine();
  const { register, handleSubmit } = useForm();
  // 첫 접속시 루틴리스트를 표시하기 위한 useEffect
  useEffect(() => {
    let Routine = JSON.parse(sessionStorage.getItem("routine") || "");
    let CopyRoutine = [...Routine];
    setRoutines(CopyRoutine);
  }, []);

  // 루틴을 1개 추가하기 위한 함수
  const onSubmitCreateRoutine = handleSubmit(async (data) => {
    await createRoutine(data.title);
    setRoutines((prev: any) => [...prev, { title: data.title, list: [{ exercise: "", reps: "", sets: "", weight: "" }] }]);
  });

  /** 루틴 리스트를 선택하면 해당하는 index가 GlobalState에 저장되는 함수 */
  const onClickRoutineTitle = (event: MouseEvent<HTMLDivElement>) => {
    setClickedRoutine(event.currentTarget.tabIndex);
  };

  const onClickDeleteRoutine = async () => {
    await DeleteRoutine();
    let routines = JSON.parse(sessionStorage.getItem("routine") || "");
    const IndexCount = clickedRoutine;
    routines.splice(IndexCount, 1);
    const NewRoutineList = routines;
    setRoutines([...NewRoutineList]);
    setClickedRoutine(0);
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
          {routines.length !== 0 ? (
            routines.map((item: any, index: number) => (
              <LS.ListBox key={uuid()}>
                <LS.ListItem elevation={2} tabIndex={index} onClick={onClickRoutineTitle}>
                  {item.title}
                </LS.ListItem>
                {clickedRoutine === index ? <LS.Delete tabIndex={index} onClick={onClickDeleteRoutine}></LS.Delete> : <LS.HideIcon></LS.HideIcon>}
              </LS.ListBox>
            ))
          ) : (
            <NoRoutine Text="새로운 루틴을 생성 해 주세요" />
          )}
        </LS.ListWrapper>
      </LS.FormBox>
    </LS.Wrapper>
  );
}
