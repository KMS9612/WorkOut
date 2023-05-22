import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";

export const Check = styled(CheckIcon)`
  width: 25px;
  height: 15px;
  font-size: 15px;
  color: #fff;
  background-color: #ff8375;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div`
  box-sizing: border-box;
  width: 25px;
  height: 15px;
  color: #fff;
  background-color: #ff8375;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  width: 50%;
`;
