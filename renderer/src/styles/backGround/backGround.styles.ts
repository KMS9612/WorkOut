import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
    overflow: scroll;
  }
`;

export const Header = styled(Typography)`
  font-family: "Jua", "sans-serif";
  color: #ff8375;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
  }
`;
export const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
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
  @media screen and (max-width: 700px) {
    width: 80%;
    margin-bottom: 5px;
  }
`;
