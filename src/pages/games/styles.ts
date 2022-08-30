import styled, { keyframes } from "styled-components";

const titleAnim = keyframes`
0%{
  opacity: 0;
  transform:translateX(30px)
}
20%{
  color: blue;
}
40%{
  color: red;
}
60%{
  color: green;
}
80%{
  color: yellow;
}
100%{
  opacity: 1;
  transform:translateX(0)
}
`;
const textAnim = keyframes`
from{
  opacity: 0;
  transform: translateX(-30px);
}
to{
  opacity:1;
}
`;
const buttonAnim = keyframes`
from{
  opacity: 0;
  transform: scale(0);
}
to{
  opacity:1;
}
`;

export const Container = styled.section`
  z-index: 2;
  color: ${(props) => props.theme.colors.text};
  background-color: rgba(1, 1, 1, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 80vw;
  overflow: hidden scroll;
  h1 {
    font-size: 48px;
    animation: ${titleAnim} 1s;
  }
  .info {
    display: flex;
    font-size: 18px;
    width: 90%;
    flex-direction: column;
    line-height: 40px;
    animation: ${textAnim} 1s;
    .text {
      margin-bottom: 20px;
    }
  }
  button {
    border-radius: 10px;
    border: 2px solid cyan;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.buttonBg};
    color: ${(props) => props.theme.colors.text};
    transition: 1s;
    animation: ${buttonAnim} 1s;
    margin: 10px 0;
    a {
      font-size: 24px;
      font-weight: bolder;
      text-decoration: none;
      text-decoration-style: none;
      color: ${(props) => props.theme.colors.text};
    }
  }
  @media (min-height: 900px) {
    justify-content: space-evenly;
    h1 {
      font-size: 64px;
    }
    button {
      margin: 0;
    }
  }
  @media (min-width: 800px) {
    height: 100%;
    width: 50vw;
    h1 {
      font-size: 64px;
    }
    .info {
      font-size: 32px;
    }
    button {
      :hover {
        transition: 0.2s;
        transform: scale(1.3);
        box-shadow: 0 0 90px cyan;
        color: ${(props) => props.theme.colors.bgColor};
        border-color: ${(props) => props.theme.colors.buttonHovBorder};
      }
    }
  }
  @media (min-width: 2500px) {
    font-size: 32px;
    h1 {
      font-size: 72px;
    }
    .info {
      font-size: 42px;
      line-height: 60px;
    }
    button {
      a {
        padding: 2rem;
        font-size: 42px;
      }
    }
  }
`;
