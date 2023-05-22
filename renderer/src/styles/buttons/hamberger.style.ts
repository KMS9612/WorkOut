import { BarMid, BarTopBot } from "../../types/buttons/hamberger.type";
import styled from "@emotion/styled";
// styles
export const Button = styled.button<BarTopBot>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ checked }) => (checked ? "center" : "space-around")};
  width: 1.5rem;
  height: 1.5rem;
  margin: 5px 0px 0px 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001;
`;

export const Bar = styled.span`
  height: 0.25rem;
  width: 100%;
  background: #ff8375;
  border-radius: 10px;
`;

export const BarTop = styled(Bar)<BarTopBot>`
  position: ${({ checked }) => (checked ? "absolute" : "none")};
  transition: transform 0.25s ease-in-out;
  transform: ${({ checked }) => (checked ? "rotate(45deg)" : "none")};
`;

export const BarMiddle = styled(Bar)<BarMid>`
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: opacity 0.25s ease-in-out;
`;

export const BarBottom = styled(Bar)<BarTopBot>`
  position: ${({ checked }) => (checked ? "absolute" : "none")};
  transition: transform 0.25s ease-in-out;
  transform: ${({ checked }) => (checked ? "rotate(-45deg)" : "none")};
`;
