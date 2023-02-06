import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const Header = styled(Typography)`
  width: 90%;
  color: #ff8537;
  font-family: "Jua";
`;
