import styled from "@emotion/styled";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export const Wrapper = styled.form`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 550px) {
    width: 90vw;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled(Typography)`
  font-family: "Jua", "sans-serif";
  color: #ff8375;
  font-weight: 700;
`;

export const InputWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Input = styled(TextField)`
  width: 300px;

  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;

export const BtnWrapper = styled(Stack)``;

export const LoginBtn = styled(Button)`
  width: 300px;
  color: #fff;
`;

export const SignInBtn = styled(Button)`
  width: 300px;
`;

export const Err = styled.div`
  color: red;
  font-size: 16px;
  font-family: "Jua", "sans-serif";
`;
