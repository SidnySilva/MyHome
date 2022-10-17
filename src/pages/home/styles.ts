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
  background-color: rgba(1, 1, 1, 0.7);
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  height: 100vh;
  animation: ${animate} 2s;
  overflow-y: scroll;
  overflow-x: hidden;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 20px;
    line-height: 3rem;
    width: 95%;
  }

  @media (min-width: 800px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1000px) {
    width: 50vw;
    height: 100vh;
    h1 {
      font-size: 64px;
    }
    p {
      font-size: 24px;
      line-height: 3rem;
      width: 90%;
    }
  }
  
  @media (min-width: 2500px) {
    h1 {
      font-size: 64px;
    }
    p {
      font-size: 42px;
      line-height: 6rem;
    }
  }
  `;
