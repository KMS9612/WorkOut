import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 90vw;
    height: 90vh;
    flex-direction: column;
    height: auto;
  }
`;
