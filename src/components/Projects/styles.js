import styled from "styled-components";

export const Container = styled.section`
  z-index: 2;
  display: flex;
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
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 60vw;
    max-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
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
