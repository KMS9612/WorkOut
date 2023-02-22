import * as YD from "../../../styles/MyRoutine/yesterDayRoutine.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export default function YesterDayRoutine() {
  const [PrevRoutine, setPrevRoutine] = useState([]);
  useEffect(() => {
    const PrevRoutine = JSON.parse(sessionStorage.getItem("prevRoutine") || "");
    setPrevRoutine(PrevRoutine);
    console.log(PrevRoutine);
  }, []);

  return (
    <YD.Wrapper component={Paper}>
      <YD.Top>
        <YD.Header variant="h4">이전 루틴 정보</YD.Header>
      </YD.Top>
      <TableContainer component={Paper} elevation={4} style={{ textAlign: "right", maxWidth: "90%" }}>
        <Table aria-label="simple table" style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>운동종류</TableCell>
              <TableCell align="center">중량&nbsp;(kg)</TableCell>
              <TableCell align="center">횟수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PrevRoutine.list?.map((item, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {item.exercise}
                </TableCell>
                <TableCell align="center">{item.weight}</TableCell>
                <TableCell align="center">{item.reps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </YD.Wrapper>
  );
}
