import styled from "@emotion/styled";

interface IWrapper {
  isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  width: 250px;
  height: 100vh;
  padding-top: 25px;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "-1px" : "-500px")};
  transition: left 0.5s ease-in-out;
  background-color: #2b2d42;
  z-index: 10000;
`;
