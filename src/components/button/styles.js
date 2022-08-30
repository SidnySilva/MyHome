import styled from "styled-components";

export const Buttons = styled.button`
  border-radius: 10px;
  border: 2px solid cyan;
  padding: 10px;
  background-color: #111;
  color: white;
  transition: 1s;
  width: 100px;
  :hover {
    transition: 0.2s;
    border-color: green;
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 90px cyan;
  }
  @media (min-width: 2500px) {
    font-size: 24px;
    width: 150px;
  }
`;

export const ButtonLanguage = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  transition: 1s;
  img {
    min-width: 100%;
    height: 50px;
    border-radius: 50%;
  }
  :hover {
    transition: 0.2s;
    border-color: green;
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 90px cyan;
  }
`;
export const SandButton = styled.div`
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  cursor: pointer;
  hr {
    width: 70%;
    background-color: white;
    height: 2.5px;
    border-radius: 10px;
  }
  @media (min-width: 500px) {
    hr {
      width: 90%;
      height: 5px;
    }
  }
`;
