import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ff8375;
  border-radius: 5px;
`;
export const Header = styled.h2`
  color: #ff8375;
  font-size: 32px;
  font-family: "Jua", "sans-serif";
`;
export const TextWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const MessageBox = styled.div`
  font-size: 20px;
  font-family: "Jua", "sans-serif";
`;
export const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Input = styled(TextField)`
  width: 80%;
`;
export const SubmitBtn = styled(Button)`
  width: 10%;
  height: 50px;
  margin-bottom: 8px;
`;
