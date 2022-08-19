import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity:1;
}
`;
export const Container = styled.section`
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 90%;
  margin-top: 2rem;
  gap: 2rem;
  transition: 1s;
  font-size: 24px;
  h2 {
    text-align: center;
  }
  a {
    color: cyan;
  }
  button {
    border-radius: 10px;
    border: 2px solid cyan;
    padding: 10px;
    width: 8rem;
    background-color: #111;
    color: white;
    transition: 1s;
    :hover {
      transition: 0.2s;
      transform: scale(1.3);
      box-shadow: 0 0 90px cyan;
      font-weight: bolder;
      border-color: green;
    }
  }
  .options {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Cv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${animate} 1s;
  overflow-y: scroll;
  max-height: 80%;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Me = styled.section`
  animation: ${animate} 1s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Contact = styled.footer`
  width: 90vw;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
  img {
    margin: 5px;
    width: 25px;
    height: 25px;
  }
  .git {
    background-color: white;
    border-radius: 50%;
  }
`;
