import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity:1;
}
`;
const topAnim = keyframes`
0%{
  opacity: 0;
  transform: translateY(-20px);
}
100%{
  opacity:1;
  transform: translateY(0px);

}
`;
export const Container = styled.section`
  z-index: 2;
  background-color: rgba(1, 1, 1, 0.7);

  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;

  gap: 2rem;
  font-size: 24px;
  overflow: hidden scroll;
  h1 {
    margin-top: 2rem;
    animation: ${topAnim} 1s;
  }
  h2 {
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.colors.link};
  }
  button {
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.buttonBorder};
    padding: 10px;
    width: 6rem;
    background-color: ${(props) => props.theme.colors.buttonBg};
    color: ${(props) => props.theme.colors.text};
  }
  .options {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    animation: ${topAnim} 1s;
  }
  @media (min-width: 800px) {
    width: 60vw;
    overflow: visible visible;

    h2 {
      text-align: center;
    }
    a {
      color: ${(props) => props.theme.colors.link};
    }
    button {
      width: 8rem;
      transition: 1s;
      :hover {
        transition: 0.2s;
        transform: scale(1.3);
        box-shadow: 0 0 90px ${(props) => props.theme.colors.shadows};
        font-weight: bolder;
        border-color: ${(props) => props.theme.colors.buttonHovBorder};
      }
    }
  }
  @media (min-width: 2500px) {
    h1 {
      font-size: 64px;
    }
    button {
      width: 12rem;
      font-size: 28px;
    }
  }
`;
export const Certificate = styled.section`
  display: flex;
  justify-content: center;
  img {
    width: 80%;
  }
`;

export const Cv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${animate} 1s;
  overflow-y: scroll;
  width: 90vw;
  max-height: 70%;
  padding-bottom: 10px;
  font-size: 16px;
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0 0 0 transparent;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 20px;
  }
  @media (min-width: 800px) {
    width: 50vw;
    font-size: 24px;
  }
  @media (min-width: 2500px) {
    font-size: 36px;
  }
`;

export const Me = styled.section`
  animation: ${animate} 1s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  height: 80%;
  width: 90vw;

  p {
    font-size: 16px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0 0 0 transparent;
  }
  @media (min-width: 800px) {
    font-size: 20px;
    width: 80%;
    overflow-y: visible;
  }
  @media (min-width: 1150px) {
    animation: ${animate} 1s;
    font-size: 28px;
    height: 100%;
    width: 50vw;
    p {
      font-size: 24px;
    }
  }
  @media (min-width: 2500px) {
    font-size: 64px;
    height: 100%;
    width: 50vw;
    p {
      font-size: 36px;
    }
  }
`;

export const Contact = styled.footer`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.header};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  h2 {
    font-size: 28px;
  }
  div {
    display: flex;
    width: 80%;
    align-items: center;
  }
  img {
    margin: 5px;
    width: 25px;
    height: 25px;
  }
  .git {
    background-color: ${(props) => props.theme.colors.text};
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 50%;
  }
  .linkedin {
    background-color: ${(props) => props.theme.colors.text};
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 5px;
  }
  padding-bottom: 20px;
  margin-top: 20px;
  @media (min-width: 1150px) {
    font-size: 16px;
    @media (min-width: 800px) {
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      font-size: 24px;
      h2 {
        margin-left: 2rem;
      }
      div {
        align-self: center;
        width: 100%;
      }
    }
  }
  @media (min-width: 2500px) {
    h2 {
      font-size: 36px;
      margin-left: 2rem;
    }
    font-size: 36px;
  }
`;
