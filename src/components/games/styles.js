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
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 50vw;
  h1 {
    font-size: 64px;
    animation: ${titleAnim} 1s;
  }
  .info {
    display: flex;
    font-size: 32px;
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
    background-color: #111;
    color: white;
    transition: 1s;
    animation: ${buttonAnim} 1s;
    a {
      font-size: 24px;
      font-weight: bolder;
      text-decoration: none;
      text-decoration-style: none;
      color: white;
    }
    :hover {
      transition: 0.2s;
      transform: scale(1.3);
      box-shadow: 0 0 90px cyan;
      color: #111;
      border-color: green;
    }
  }
`;
