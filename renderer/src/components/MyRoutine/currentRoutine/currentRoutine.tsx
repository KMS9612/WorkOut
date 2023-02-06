import * as CR from "../../../styles/MyRoutine/currentRoutine.styles";
import { TableContainer, Paper, TableRow, TableHead, TableCell, TableBody, Table, Button } from "@mui/material";
export default function CurrentRoutine() {
  function createData(name: string, weight: number, Reps: number) {
    return { name, weight, Reps };
  }

  const rows = [createData("데드리프트", 110, 10), createData("데드리프트", 110, 10), createData("데드리프트", 110, 10), createData("데드리프트", 110, 10)];
  return (
    <CR.Wrapper component={Paper}>
      <CR.Header variant="h4">오늘 진행 할 루틴</CR.Header>
      <TableContainer component={Paper} elevation={4} style={{ textAlign: "right", maxWidth: "90%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>운동종류</TableCell>
              <TableCell align="center">중량&nbsp;(kg)</TableCell>
              <TableCell align="center">횟수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="center">{row.Reps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CR.Wrapper>
  );
}
