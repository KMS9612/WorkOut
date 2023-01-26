import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

// @media screen and (max-width: 550px)

export const Wrapper = styled.form`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ff8375;
  border-radius: 5px;
  padding-top: 15px;
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 350px;
  }
`;

export const InputWrapper = styled(Box)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export const Input = styled(TextField)`
  width: 90%;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Btn = styled(Button)`
  margin: 0px 5px 5px 0px;
`;

export const PasswordBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const VisibilityBtn = styled.div`
  position: absolute;
  right: 7%;
  bottom: 25%;
  cursor: pointer;
`;
