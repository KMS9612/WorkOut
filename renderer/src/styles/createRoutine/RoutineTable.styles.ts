import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
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

export const Header = styled(Typography)`
  width: 90%;
  color: #ff8537;
  font-family: "Jua";
`;
export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Input = styled(TextField)`
  width: 27%;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
