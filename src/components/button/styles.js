import styled from "styled-components";

export const Buttons = styled.button`
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
