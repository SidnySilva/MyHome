import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  transition: 1s;
  svg {
    transition: 1s;
    padding: 0 5px;
    user-select: none;
    cursor: default;
    color: ${(props) => props.theme.colors.bgIcon};
    background-color: transparent;
    :hover {
      transition: 0s;
      color: ${(props) => props.theme.colors.shadows};
      filter: drop-shadow(0 0 120px ${(props) => props.theme.colors.shadows});
      background-color: transparent;

    }
  }
`;
const animate1 = keyframes`
   0%{
    transform:translateX(100%)
   } 
   100%{
    transform:translateX(-100%)

   }
`;
const animate2 = keyframes`
   0%{
    transform:translateX(0)
   } 
   100%{
    transform:translateX(-200%)

   }
`;
export const Row = styled.div`
  position: relative;
  top: -40%;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 64px;
  transform: rotate(-30deg);
  div {
    animation: ${animate1} 100s linear infinite;
    :nth-child(2) {
      animation: ${animate2} 100s linear infinite;
      animation-delay: -50s;
    }
  }

  :nth-child(even) {
    div {
      animation: ${animate1} 100s linear reverse infinite;
      :nth-child(2) {
        animation: ${animate2} 100s linear reverse infinite;
        animation-delay: -50s;
      }
    }
  }
  @media (min-width: 1000px) {
    font-size: 72px;
    top: -45%;
  }

  @media (min-width: 2500px) {
    font-size: 92px;
    top: -50%;
  }
`;
