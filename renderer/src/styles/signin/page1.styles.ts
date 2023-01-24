import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff8375;
  border-radius: 5px;
  padding-top: 15px;
`;

export const InputWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled(TextField)`
  width: 30vw;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const Btn = styled(Button)`
  margin: 0px 5px 5px 0px;
`;
