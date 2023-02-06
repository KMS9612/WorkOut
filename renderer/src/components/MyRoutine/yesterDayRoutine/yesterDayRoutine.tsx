import * as YD from "../../../styles/MyRoutine/yesterDayRoutine.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function YesterDayRoutine() {
  function createData(name: string, weight: number, Reps: number) {
    return { name, weight, Reps };
  }

  const rows = [createData("데드리프트", 110, 10)];
  return (
    <YD.Wrapper component={Paper}>
      <YD.Top>
        <YD.Header variant="h4">어제의 루틴</YD.Header>
      </YD.Top>
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
    </YD.Wrapper>
  );
}
