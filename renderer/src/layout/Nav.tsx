import styled from "@emotion/styled";
import HambergerMenu from "../components/buttons/hamberger";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

export default function Nav() {
  const router = useRouter();
  return (
    <Wrapper>
      <HambergerMenu />
    </Wrapper>
  );
}
