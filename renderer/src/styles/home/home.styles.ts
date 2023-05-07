import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Header = styled(Typography)`
  font-family: "Jua", "sasn-serif";
  color: #ff8375;
  font-weight: 700;
`;

export const BtnWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: 550px) {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ToLogin = styled(Button)`
  width: 20vw;
  @media screen and (max-width: 550px) {
    width: 250px;
  }
`;
export const ToSignin = styled(Button)`
  width: 20vw;
  @media screen and (max-width: 550px) {
    width: 250px;
  }
`;
