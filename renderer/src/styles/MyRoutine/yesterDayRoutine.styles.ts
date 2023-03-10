import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Header = styled(Typography)`
  color: #ff8537;
  font-family: "Jua";
`;
export const Top = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
