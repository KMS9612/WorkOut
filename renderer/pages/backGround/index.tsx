import * as BS from "../../src/styles/backGround/backGround.styles";
import ForumIcon from "@mui/icons-material/Forum";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MouseEvent } from "react";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";

const icons = [
  { routing: "ai", title: "AI와 대화", Icon: ForumIcon },
  { routing: "MyRoutine", title: "나의 운동루틴", Icon: FitnessCenterIcon },
  { routing: "createRoutine", title: "새로운 운동루틴 만들기", Icon: PlaylistAddIcon },
];

export default function BackGround() {
  const router = useRouter();
  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return (
    <BS.Wrapper>
      {icons.map(({ routing, title, Icon }) => (
        <Tooltip title={title} key={routing}>
          <BS.IconBox id={routing} onClick={onClickMoveToPage} elevation={4}>
            <Icon />
          </BS.IconBox>
        </Tooltip>
      ))}
    </BS.Wrapper>
  );
}
