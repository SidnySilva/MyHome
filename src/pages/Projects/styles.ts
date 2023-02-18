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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    gap:40px;
    padding: 100px 20px;
    overflow-x: scroll; 
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 70vw;
    max-height: 90vh;
  }
`;

export const FilterButton = styled.button`
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.buttonBorder};
  padding: 10px;

  background-color: ${(props) => props.theme.colors.buttonBg};
  color: ${(props) => props.theme.colors.text};
  transition: 1s;

  :hover {
    transition: 0.2s;
    border-color: ${(props) => props.theme.colors.buttonHovBorder};
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 90px ${(props) => props.theme.colors.shadows};
  }
  @media (min-width: 2500px) {
    font-size: 24px;
    width: 150px;
  }
`;
