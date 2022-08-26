import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
    height: 0;
}
100%{
    height: 50vh;
    }
`;
const opacity = keyframes`
0%{
    transform: scale(0);
}
50%{
    transform: scale(0);
}
100%{
    transform: scale(1);
    }
`;
export const Container = styled.section`
  background-color: black;
  position: absolute;
  top: 70px;
  right: 0;
  width: 60vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 2s;
  animation: ${animate} 1s;
  button {
    :nth-child(1) {
      animation: ${opacity} 1s;
    }
    :nth-child(2) {
      animation: ${opacity} 1.5s;
    }
    :nth-child(3) {
      animation: ${opacity} 2s;
    }
  }
  div button {
    margin: 0 1rem;
  }
  @media (min-width: 500px) {
    width: 30vw;
  }
`;
