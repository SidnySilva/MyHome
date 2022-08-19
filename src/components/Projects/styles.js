import styled from "styled-components";

export const Container = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 800px) {
    padding: 0;
    margin: 0;
    width: 60vw;
    max-height: 90vh;
  }
`;
