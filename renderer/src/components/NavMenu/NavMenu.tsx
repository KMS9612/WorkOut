import { useRecoilState } from "recoil";
import * as NS from "../../styles/NavMenu/NavMenu.style";
import { IsOpen } from "../../recoilState/NavBar/isOpen";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import LogoutBtn from "../buttons/Logout";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useRecoilState(IsOpen);
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("UserInfo")) {
      let UserDPName = JSON.parse(
        sessionStorage.getItem("UserInfo") || ""
      ).displayName;
      setDisplayName(UserDPName);
    } else {
      setDisplayName("");
    }
    console.log("Nav", displayName);
  }, [isOpen]);

  const icons = [
    { routing: "backGround", title: "메뉴바로 이동", Icon: WidgetsIcon },
    { routing: "MyRoutine", title: "나의 운동루틴", Icon: FitnessCenterIcon },
    {
      routing: "createRoutine",
      title: "새로운 운동루틴 만들기",
      Icon: PlaylistAddIcon,
    },
  ];

  const onClickRouting = (route: string) => {
    router.push(route);
    setIsOpen((prev) => !prev);
  };
  return (
    <NS.Wrapper isOpen={isOpen}>
      {displayName !== "" ? (
        <div>
          <NS.HeadBox>
            "{displayName}"님 환영합니다!
            <LogoutBtn />
          </NS.HeadBox>
          {icons.map((el) => (
            <NS.NavBox key={uuid()} onClick={() => onClickRouting(el.routing)}>
              <el.Icon></el.Icon>
              {el.title}
            </NS.NavBox>
          ))}
        </div>
      ) : (
        <NS.BtnWrapper>
          <Button
            sx={{ width: 200 }}
            onClick={() => {
              router.push("login");
            }}
          >
            로그인하기
          </Button>
        </NS.BtnWrapper>
      )}
    </NS.Wrapper>
  );
}
