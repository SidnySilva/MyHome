import styled, { keyframes } from "styled-components";

const spin = keyframes`
0%{
  transform: rotateX(60deg) rotateZ(0);
}
  100%{
  transform: rotateX(60deg) rotateZ(-360deg);
    
  }
  `;
const wave = keyframes`
0%,100%{
  margin-bottom:0;
}
  50%{
    margin-bottom:15px;
  }
  `;
export const Container = styled.li`
  position: relative;
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
  .base {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid ${(props) => props.theme.colors.buttonBorder};
    border-left: 8px solid transparent;
    filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.buttonBorder});
    animation: ${spin} 8s linear infinite;
  }

  .base::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    top: 9px;
    left: 9px;
    border-radius: 50%;
    z-index: 5;
    background-color: ${(props) => props.theme.colors.buttonBorder};
  }

  .base,
  .icon,
  .title {
    position: absolute;
    columns: #b5b5b5;
    transform: rotateX(60deg) rotateZ(-45deg);
    cursor: pointer;
    transition: 0.5s ease-in-out;
    z-index: 5;
  }
  .title{
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 2px;
    transform: rotateY(30deg) skewY(-24deg) translateY(0px);
    pointer-events: none;
    opacity: 0;
    z-index: 6;
  }
  .icon{
    display: grid;
    place-items: center;
    font-size: 80px;
    height: 100%;
    pointer-events: none;
    
  }
  .base:hover{
    filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.buttonBorder});
    animation-play-state: paused;
  }
  .base:hover + .title + .icon{
    transform: rotateY(30deg) skewY(-24deg) translateY(-90px);
    color: ${(props) => props.theme.colors.buttonBorder};
    filter: drop-shadow(0 0 3px ${(props) => props.theme.colors.buttonBorder});
    animation: ${wave} 1s ease-in-out infinite;
  }
  .base:hover + .title {
    transform:  translateY(100px);
    color: crimson;
    text-shadow: 0 0 3px crimson;
    -webkit-text-stroke: 1px violet;
    transition-delay: 0.1s;
    opacity: 1;
    animation: ${wave} 1s ease-in-out infinite;
  }
  .icon{
    z-index: 5;
  }

  img{
    border-radius: 50%;
    width: 100%;
  }

`;
