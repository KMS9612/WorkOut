import { useRecoilValue } from "recoil";
import * as NS from "../../styles/NavMenu/NavMenu.style";
import { IsOpen } from "../../recoilState/NavBar/isOpen";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MouseEvent, useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { useRouter } from "next/router";

export default function NavMenu() {
  const isOpen = useRecoilValue(IsOpen);
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("UserInfo")) {
      const UserDPName = JSON.parse(sessionStorage.getItem("UserInfo") || "").displayName;
      setDisplayName(UserDPName);
    }
    console.log("working");
  });

  const icons = [
    { routing: "MyRoutine", title: "나의 운동루틴", Icon: FitnessCenterIcon },
    {
      routing: "createRoutine",
      title: "새로운 운동루틴 만들기",
      Icon: PlaylistAddIcon,
    },
  ];

  const onClickRouting = (e: MouseEvent<HTMLDivElement>) => {
    router.push(e.currentTarget.id);
  };
  return (
    <NS.Wrapper isOpen={isOpen}>
      {displayName ? (
        <NS.HeadBox>"{displayName}"님 환영합니다!</NS.HeadBox>
      ) : (
        <NS.BtnWrapper>
          <button>로그인하기</button>
        </NS.BtnWrapper>
      )}
      {icons.map((el) => (
        <NS.NavBox key={uuid()} id={el.routing} onClick={onClickRouting}>
          <el.Icon></el.Icon>
          {el.title}
        </NS.NavBox>
      ))}
    </NS.Wrapper>
  );
}
