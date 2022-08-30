import styled from "styled-components";

export const Container = styled.header`
  z-index: 4;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100vw;
`;

export const ButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  button {
    margin: 0;
  }

  @media (min-width: 1000px) {
    width: 50%;
    button {
      margin: 0 0.5rem;
    }
  }
`;
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 50%;
  h1 {
    margin-left: 20px;
    font-size: 32px;
    color: white;
    text-overflow: clip;
    cursor: pointer;
    transition: 1s;
    :hover {
      transition: 0.3s;
      text-shadow: 0 0 10px cyan;
      transform: scale(1.2);
    }
  }
  @media (min-width: 2500px) {
    h1 {
      font-size: 64px;
    }
  }
`;
