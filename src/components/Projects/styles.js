import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  opacity: 0;
  transform:scale(0)
}
50%{
  opacity: 0.5;
  transform:scale(1.3)
}
100%{
  opacity: 1;
  transform:scale(1)
}
`;

export const Container = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  height: 100%;
  gap: 2rem;
  overflow-y: hidden;
  overflow-x: scroll;

  .buttonHolder {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    button:nth-child(1) {
      animation: ${animate} 0.3s;
    }
    button:nth-child(2) {
      animation: ${animate} 0.6s;
    }
    button:nth-child(3) {
      animation: ${animate} 0.9s;
    }
    button:nth-child(4) {
      animation: ${animate} 1.2s;
    }
  }
  .cardContainer {
    display: flex;
    align-items: center;
    width: 95vw;
    height: 100%;
    gap: 2rem;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 60vw;
    max-height: 90vh;
    .cardContainer {
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
`;

export const FilterButton = styled.button`
  border-radius: 10px;
  border: 2px solid cyan;
  padding: 10px;
  background-color: #111;
  color: white;
  transition: 1s;

  :hover {
    transition: 0.2s;
    border-color: green;
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 90px cyan;
  }
`;
