import { useRecoilState } from "recoil";
import * as HS from "../../styles/buttons/hamberger.style";
import { IsOpen } from "../../recoilState/NavBar/isOpen";

export default function HambergerMenu(props) {
  const [isOpen, setIsOpen] = useRecoilState(IsOpen);

  return (
    <HS.Button onClick={props.onClickOpenNav} checked={isOpen}>
      <HS.BarTop checked={isOpen} />
      <HS.BarMiddle open={isOpen} />
      <HS.BarBottom checked={isOpen} />
    </HS.Button>
  );
}
