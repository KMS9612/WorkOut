import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 95vw;
  }
`;

export const Header = styled(Typography)`
  width: 25%;
  text-align: left;
  font-weight: 700;
  color: #ff8375;
  font-family: "Jua", "sans-serif";
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  width: 25%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
