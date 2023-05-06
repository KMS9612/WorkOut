import { useRecoilValue } from "recoil";
import * as NS from "../../styles/NavMenu/NavMenu.style";
import { IsOpen } from "../../recoilState/NavBar/isOpen";

export default function NavMenu() {
  const isOpen = useRecoilValue(IsOpen);
  return (
    <NS.Wrapper isOpen={isOpen}>
      <div style={{ color: "#fff" }}>NavMenu</div>
    </NS.Wrapper>
  );
}
