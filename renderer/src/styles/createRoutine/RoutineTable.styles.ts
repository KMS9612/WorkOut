import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Header = styled(Typography)`
  width: 90%;
  color: #ff8537;
  font-family: "Jua";
`;
export const InputWrapper = styled.div`
  width: 95%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-content: flex-end;
  align-content: flex-end;
  @media screen and (max-width: 700px) {
  }
`;

export const Input = styled(TextField)`
  width: 90%;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const SubmitNewExercise = styled(Button)`
  width: 90%;
`;
