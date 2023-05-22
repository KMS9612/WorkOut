import * as CS from "../../src/styles/createRoutine/createRoutine.styles";
import RoutineList from "../../src/components/createRoutine/RoutineList/RoutineList";
import RoutineTable from "../../src/components/createRoutine/RoutineTable/RoutineTable";

export default function CreateRoutine() {
  return (
    <CS.Wrapper>
      <RoutineList />
      <RoutineTable />
    </CS.Wrapper>
  );
}
