import * as CR from "../../../styles/MyRoutine/currentRoutine.styles";
import {
  TableContainer,
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { ClickedRoutine } from "../../../recoilState/Routine/MyRoutine";
import { useEffect, useState } from "react";
export default function CurrentRoutine() {
  const [isClick, setIsClick] = useRecoilState(ClickedRoutine);
  const [RoutineList, setRoutineList] = useState([]);
  useEffect(() => {
    const routine = JSON.parse(sessionStorage.getItem("routine") || "");
    setRoutineList(routine[isClick]);
  }, [isClick]);

  return (
    <CR.Wrapper component={Paper}>
      <CR.Header variant="h4">오늘 진행 할 루틴</CR.Header>
      <TableContainer
        component={Paper}
        elevation={4}
        style={{ textAlign: "right", maxWidth: "90%" }}
      >
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
            {RoutineList.list?.map((el: any) => (
              <TableRow
                key={el.exercise}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {el.exercise}
                </TableCell>
                <TableCell align="center">{el.weight}</TableCell>
                <TableCell align="center">{el.reps}</TableCell>
                <TableCell align="center">{el.sets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CR.Wrapper>
  );
}
