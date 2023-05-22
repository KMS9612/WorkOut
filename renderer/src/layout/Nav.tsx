import styled from "@emotion/styled";
import HambergerMenu from "../components/buttons/hamberger";
import { useRecoilState } from "recoil";
import { IsOpen } from "../recoilState/NavBar/isOpen";
import NavMenu from "../components/NavMenu/NavMenu";

const Wrapper = styled.div<TWrapper>`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: ${(props) => (props.isOpen ? "100%" : "5%")};
  height: ${(props) => (props.isOpen ? "100%" : "5%")};
  z-index: 9999;
  backdrop-filter: blur(2px);
  transition: all 300ms;
`;

type TWrapper = {
  isOpen: boolean;
};

export default function Nav() {
  const [isOpen, setIsOpen] = useRecoilState(IsOpen);

  const onClickOpenNav = () => {
    setIsOpen(!isOpen);
  };

  const onClickCloseNav = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <Wrapper isOpen={isOpen} onClick={onClickCloseNav}>
      <HambergerMenu onClickOpenNav={onClickOpenNav} />
      <NavMenu></NavMenu>
    </Wrapper>
  );
}
