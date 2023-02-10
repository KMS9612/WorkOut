import { Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
export const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Wrapper = styled(Box)`
  width: 45%;
  height: 100%;

  padding: 20px 0px;
`;

export const Header = styled(Typography)`
  font-family: "Jua";
  color: #ff8357;
`;

export const Top = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListWrapper = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ListItem = styled(Paper)`
  width: 95%;
  height: 60px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled(TextField)`
  width: 80%;
`;
export const SubmitBtn = styled(Button)`
  width: 15%;
  height: 30px;
`;
