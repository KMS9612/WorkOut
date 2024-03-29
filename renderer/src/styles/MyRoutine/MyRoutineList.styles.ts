import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

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
  font-family: "Jua";
  color: #ff8357;
`;

export const Top = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListWrapper = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ListItem = styled(Paper)`
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  &:focus {
    transition: 300ms;
    color: #ff8375;
    font-size: 32px;
  }
`;
