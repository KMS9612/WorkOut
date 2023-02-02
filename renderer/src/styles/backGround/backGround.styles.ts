import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconBox = styled(Paper)`
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #ff8375;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2);
    transition: 1000ms;
  }
`;
