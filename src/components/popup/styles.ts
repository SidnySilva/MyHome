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
  background-color: ${(props) => props.theme.colors.header};
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
  animation: ${animate} 0.5s;
  button {
    :nth-child(1) {
      animation: ${opacity} 0.5s;
    }
    :nth-child(2) {
      animation: ${opacity} 0.8s;
    }
    :nth-child(3) {
      animation: ${opacity} 1s;
    }
  }
  div button {
    margin: 0 1rem;
  }
  @media (min-width: 500px) {
    width: 30vw;
  }
`;

const animate2 = keyframes`
from{
  opacity: 0;
  transform: rotate(0);
}
to{
  opacity: 1;
  transform: rotate(360deg);
}
`;

export const ColorPallete = styled.div`
  margin-left: 2rem;
  width: 40px;
  height: 40px;
  position: relative;
  transition: 1s;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  color: white;
  cursor: pointer;

  p {
    position: absolute;
    top: 25%;
    right: 35%;
  }
  div {
    width: 15px;
    height: 15px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    animation: ${animate2} 1s;
    div {
      cursor: pointer;
    }
  }

  .default {
    background-color: black;
    top: -0.5rem;
    right: 0.7rem;
  }
  .blue {
    background-color: blue;
    right: -0.6rem;
  }
  .red {
    background-color: red;
    right: -0.6rem;
    top: 1.3rem;
  }
  .yellow {
    background-color: yellow;
    left: 0.7rem;
    bottom: -0.5rem;
  }
  .green {
    background-color: green;
    left: -0.5rem;
    bottom: 0.2rem;
  }
  .purple {
    background-color: purple;
    top: -0rem;
    left: -0.5rem;
  }
`;
