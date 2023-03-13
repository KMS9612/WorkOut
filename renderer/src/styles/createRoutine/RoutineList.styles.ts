import { Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Wrapper = styled(Box)`
  width: 45%;
  padding: 20px 0px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
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

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Delete = styled(DeleteIcon)`
  width: 40px;
  cursor: pointer;
  color: #ff8375;
  &:hover {
    transition: 300ms;
    font-size: 32px;
  }
`;
export const HideIcon = styled.div`
  display: hidden;
`;
export const ListItem = styled(Paper)`
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
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
  width: 70%;
  @media screen and (max-width: 700px) {
    width: 70%;
  }
`;
export const SubmitBtn = styled(Button)``;
