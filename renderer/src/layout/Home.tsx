import styled from "@emotion/styled";
import Nav from "./Nav";

const LayOutWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;
const Body = styled.div``;

export default function Layout(props: any) {
  return (
    <LayOutWrapper>
      <Nav></Nav>
      <Body>{props.children}</Body>
    </LayOutWrapper>
  );
}
