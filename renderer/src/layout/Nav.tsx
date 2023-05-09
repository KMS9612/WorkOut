import styled from "@emotion/styled";
import HambergerMenu from "../components/buttons/hamberger";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { IsOpen } from "../recoilState/NavBar/isOpen";
import NavMenu from "../components/NavMenu/NavMenu";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: 20%;
  height: 100%;
  z-index: 9999;
`;

export default function Nav() {
  const [isOpen, setIsOpen] = useRecoilState(IsOpen);

  const onClickOpenNav = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  return (
    <Wrapper>
      <HambergerMenu onClickOpenNav={onClickOpenNav} />
      <NavMenu></NavMenu>
    </Wrapper>
  );
}
