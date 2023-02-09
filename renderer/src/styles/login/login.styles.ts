import styled from "@emotion/styled";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export const Wrapper = styled.form`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ff8375;
  border-radius: 5px;
  @media screen and (max-width: 550px) {
    width: 100vw;
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
