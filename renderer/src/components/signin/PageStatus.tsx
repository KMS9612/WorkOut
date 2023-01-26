import * as PSS from "../../styles/signin/PageStatus.styles";
interface IPropsPageStatus {
  isPage1: boolean;
}

export default function PageStatus(props: IPropsPageStatus) {
  return (
    <PSS.Wrapper>
      {props.isPage1 ? <PSS.Number>1</PSS.Number> : <PSS.Check />}
      <PSS.Bar style={props.isPage1 ? { borderTop: "2px solid #bdbddb" } : { borderTop: "2px solid #ff8375" }}></PSS.Bar>
      <PSS.Number>2</PSS.Number>
    </PSS.Wrapper>
  );
}
