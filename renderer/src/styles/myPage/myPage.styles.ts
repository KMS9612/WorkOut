import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  width: 80vw;
  height: 80vh;
`;

export const Header = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid #ccc;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
`;

export const UserInfo = styled.div`
  border: 1px solid #bdbdbd;
  width: 40%;
  height: 20rem;
`;

export const ProgramBox = styled.div`
  border: 1px solid #bdbdbd;
  width: 40%;
  height: 20rem;
`;

export const UserRecord = styled.div`
  border: 1px solid #ccc;
`;
