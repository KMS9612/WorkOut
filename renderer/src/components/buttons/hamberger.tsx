import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { IsOpen } from "../../recoilState/NavBar/isOpen";

// styles
const Button = styled.button<BarTopBot>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ checked }) => (checked ? "center" : "space-around")};
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

const Bar = styled.span`
  height: 0.25rem;
  width: 100%;
  background: #000;
  border-radius: 10px;
`;

const BarTop = styled(Bar)<BarTopBot>`
  position: ${({ checked }) => (checked ? "absolute" : "none")};
  transition: transform 0.25s ease-in-out;
  transform: ${({ checked }) => (checked ? "rotate(45deg)" : "none")};
`;

const BarMiddle = styled(Bar)<BarMid>`
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: opacity 0.25s ease-in-out;
`;

const BarBottom = styled(Bar)<BarTopBot>`
  position: ${({ checked }) => (checked ? "absolute" : "none")};
  transition: transform 0.25s ease-in-out;
  transform: ${({ checked }) => (checked ? "rotate(-45deg)" : "none")};
`;

interface BarTopBot {
  checked: boolean;
}
interface BarMid {
  open: boolean;
}

export default function HambergerMenu() {
  const [isOpen, setIsOpen] = useRecoilState(IsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button onClick={handleClick} checked={isOpen}>
      <BarTop checked={isOpen} />
      <BarMiddle open={isOpen} />
      <BarBottom checked={isOpen} />
    </Button>
  );
}
