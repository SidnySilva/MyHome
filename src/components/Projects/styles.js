import styled from "styled-components";

export const Container = styled.section`
  z-index: 2;
  display: flex;
  align-items: center;
  width: 95vw;
  height: 100%;
  gap: 2rem;
  overflow-y: hidden;
  overflow-x: scroll;

  @media (min-width: 800px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 60vw;
    max-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
