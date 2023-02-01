import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, weight: number, Reps: number) {
  return { name, weight, Reps };
}

const rows = [createData("데드리프트", 110, 5), createData("벤치프레스", 60, 5), createData("스쿼트", 110, 6)];

export default function BasicTable() {
  return (
    //       신규 프로젝트 생성
    //       버튼을 누르면 현재 프로젝트를 그만두고 새로운 프로젝트를 제작할지 물어보는 Modal이 나옴
    //       일차 별 토글이 있고 클릭하면 아래 테이블이 해당 일에 맞게 나오게 제작
    <TableContainer component={Paper} elevation={4}>
      <Table sx={{ minWidth: 650 }} aria-label="">
        <TableHead>
          <TableRow>
            <TableCell>운동종류</TableCell>
            <TableCell align="right">중량</TableCell>
            <TableCell align="right">횟수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.Reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
