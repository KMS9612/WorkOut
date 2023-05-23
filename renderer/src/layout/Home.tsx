import styled from "@emotion/styled";
import Nav from "./Nav";

const LayOutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout(props: any) {
  return (
    <LayOutWrapper>
      <Nav></Nav>
      <Body>{props.children}</Body>
    </LayOutWrapper>
  );
}
