import * as CS from "../../src/styles/createRoutine/createRoutine.styles";
import RoutineList from "../../src/components/createRoutine/RoutineList/RoutineList";
import RoutineTable from "../../src/components/createRoutine/RoutineTable/RoutineTable";
import { Button } from "@mui/material";

export default function CreateRoutine() {
  return (
    <CS.Wrapper>
      <CS.Top>
        <RoutineList />
        <RoutineTable />
      </CS.Top>
      <CS.Bottom>
        <Button style={{ width: 200 }}>루틴 저장</Button>
      </CS.Bottom>
    </CS.Wrapper>
  );
}
