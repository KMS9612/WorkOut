import { useForm } from "react-hook-form";
import * as LS from "../../../styles/createRoutine/RoutineList.styles";
import useRoutine from "../../../firebase/hooks/Routine";
import Paper from "@mui/material/Paper";

export default function RoutineList() {
  const { createRoutine } = useRoutine();
  const { register, handleSubmit } = useForm();
  const onSubmitCreateRoutine = handleSubmit(async (data) => {
    await createRoutine(data.title);
  });
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
          <LS.ListItem elevation={2}>asdsd</LS.ListItem>
          <LS.ListItem elevation={2}>asdsd</LS.ListItem>
        </LS.ListWrapper>
      </LS.FormBox>
    </LS.Wrapper>
  );
}
