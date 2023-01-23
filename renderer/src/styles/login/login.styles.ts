import styled from "@emotion/styled";
import theme from "../../../lib/theme";

import { Box, Button, ButtonBase, ButtonProps, Stack, TextField, Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ff8375;
  border-radius: 5px;
`;

export const Header = styled(Typography)`
  color: #ff8375;
  font-weight: 700;
`;

export const InputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const Input = styled(TextField)`
  width: 300px;
`;

export const BtnWrapper = styled(Stack)``;

export const LoginBtn = styled(Button)`
  width: 300px;
  color: #fff;
`;

export const SignInBtn = styled(Button)`
  width: 300px;
`;
