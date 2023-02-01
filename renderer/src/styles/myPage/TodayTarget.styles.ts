import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

export const Wrapper = styled(Paper)`
  width: 40%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 20px;
`;

export const Header = styled(Typography)`
  color: #ff8573;
`;

export const TargetBox = styled.div`
  width: 100%;
  height: 80%;
`;
