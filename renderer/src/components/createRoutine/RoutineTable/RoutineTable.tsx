import * as TS from "../../../styles/createRoutine/RoutineTable.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import { ClickedRoutine, Routines } from "../../../recoilState/Routine/createRoutine";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useRoutine from "../../../firebase/hooks/Routine";
import { uuid } from "uuidv4";

export default function RoutineTable() {
  const [clickedRoutine, setClickedRoutine] = useRecoilState(ClickedRoutine);
  const [isSsr, setIsSsr] = useState(false);
  const [routines, setRoutines] = useRecoilState<any>(Routines);
  const { updateNewExercise } = useRoutine();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setIsSsr(true);
  }, []);
  // 클릭된 루틴에 새로운 운동을 추가
  const onSubmitNewExercise = handleSubmit(async (data) => {
    await updateNewExercise(clickedRoutine, data.exercise, data.weight, data.reps, data.sets);
    const routine = JSON.parse(sessionStorage.getItem("routine") || "");
    setRoutines([...routine]);
    setIsSsr(true);
  });
  return isSsr ? (
    <TS.Wrapper component={Paper}>
      {routines.length !== 0 ? (
        <TS.FormWrapper onSubmit={onSubmitNewExercise}>
          <TS.Header variant="h4">{routines[clickedRoutine]?.title}</TS.Header>
          <TS.InputWrapper onSubmit={onSubmitNewExercise}>
            <TS.Input label="종목" {...register("exercise")} />
            <TS.Input
              label="중량"
              {...register("weight")}
              InputProps={{
                endAdornment: <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TS.Input
              label="횟수"
              {...register("reps")}
              InputProps={{
                endAdornment: <InputAdornment position="start">회</InputAdornment>,
              }}
            />{" "}
            <TS.Input
              label="세트"
              {...register("sets")}
              InputProps={{
                endAdornment: <InputAdornment position="start">세트</InputAdornment>,
              }}
            />
          </TS.InputWrapper>
          <TS.SubmitNewExercise type="submit">추가하기</TS.SubmitNewExercise>
        </TS.FormWrapper>
      ) : (
        <TS.Header>새로운 루틴을 생성 해 주세요</TS.Header>
      )}
      {routines.length !== 0 ? (
        <TableContainer component={Paper} elevation={4} style={{ textAlign: "right", maxWidth: "90%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>운동종류</TableCell>
                <TableCell align="center">중량&nbsp;(kg)</TableCell>
                <TableCell align="center">횟수</TableCell>
                <TableCell align="center">세트</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {routines[clickedRoutine].list.map((row: any) => (
                <TableRow key={uuid()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.exercise}
                  </TableCell>
                  <TableCell align="center">{row.weight}</TableCell>
                  <TableCell align="center">{row.reps}</TableCell>
                  <TableCell align="center">{row.sets}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div></div>
      )}
    </TS.Wrapper>
  ) : (
    <div>Loading...</div>
  );
}
