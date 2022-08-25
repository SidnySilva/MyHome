import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
opacity: 0;
transform: translateY(-100px);
}
100%{
opacity: 1;
transform: translateX(0)
}
`;

export const Container = styled.section`
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  height: 80vh;
  animation: ${animate} 2s;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 20px;
    line-height: 3rem;
  }
  @media (min-width: 1000px) {
    width: 50vw;
    height: 80vh;
    h1 {
      font-size: 64px;
    }
    p {
      font-size: 24px;
      line-height: 3rem;
    }
  }
`;
