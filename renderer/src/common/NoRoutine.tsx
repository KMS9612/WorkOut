import * as NRS from "../styles/common/NoRoutine.style";
import { IPropsNoRoutine } from "../types/common/NoRoutine";

export default function NoRoutine(props: IPropsNoRoutine) {
  return <NRS.Wrapper>{props.Text}</NRS.Wrapper>;
}
