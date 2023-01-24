import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import theme from "../../../lib/theme";

interface IPropsPageStatus {
  isPage1: boolean;
}

const Check = styled(CheckIcon)`
  font-size: 15px;
  color: #ff8375;
`;
const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
  };
});
export default function PageStatus(props: IPropsPageStatus) {
  return (
    <Root>
      <div>
        <div>{props.isPage1 ? "1" : <Check />} - 2</div>
      </div>
    </Root>
  );
}
