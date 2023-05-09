import styled from "@emotion/styled";

interface IWrapper {
  isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  width: 250px;
  height: 100vh;
  padding: 45px 0px 0px 25px;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "-1px" : "-500px")};
  transition: left 0.5s ease-in-out;
  background-color: #2b2d42;
`;

export const HeadBox = styled.div`
  width: 100%;
  height: 100px;
  color: #fff;
`;

export const NavBox = styled.div`
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  &:hover {
    color: #ff8375;
  }
`;

export const BtnWrapper = styled.div``;
