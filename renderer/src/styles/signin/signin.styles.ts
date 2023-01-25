import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(Typography)`
  width: 50%;
  text-align: left;
  font-weight: 700;
  color: #ff8375;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
