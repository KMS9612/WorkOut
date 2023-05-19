import * as YD from "../../../styles/MyRoutine/yesterDayRoutine.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { uuid } from "uuidv4";
import NoRoutine from "../../../common/NoRoutine";

interface IPropsYesterDayRoutine {
  PrevRoutine: Array<Object>;
}

export default function YesterDayRoutine(props: IPropsYesterDayRoutine) {
  return (
    <YD.Wrapper component={Paper}>
      <YD.Top>
        <YD.Header variant="h4">이전 루틴 정보</YD.Header>
      </YD.Top>
      {props.PrevRoutine.length !== 0 ? (
        <TableContainer component={Paper} elevation={4} style={{ textAlign: "right", maxWidth: "90%" }}>
          <Table aria-label="simple table" style={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>운동종류</TableCell>
                <TableCell align="center">중량&nbsp;(kg)</TableCell>
                <TableCell align="center">횟수</TableCell>
                <TableCell align="center">세트</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.PrevRoutine.list?.map((item) => (
                <TableRow key={uuid()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.exercise}
                  </TableCell>
                  <TableCell align="center">{item.weight}</TableCell>
                  <TableCell align="center">{item.reps}</TableCell>
                  <TableCell align="center">{item.sets}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoRoutine Text={"이전에 진행한 루틴이 없습니다."} />
      )}
    </YD.Wrapper>
  );
}
