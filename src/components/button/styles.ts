import styled from "styled-components";

export const Buttons = styled.button`
border: none;
background: none;
  p {
    position: relative;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);

    ::before {
      content: attr(data-text);
      position: absolute;
      color: ${(props) => props.theme.colors.shadows};
      width: 0;
      overflow: hidden;
      transition: 1s;
      -webkit-text-stroke: 1px  ${(props) => props.theme.colors.shadows};
      text-overflow: hidden;
    }

    :hover::before {
      width: 100%;
      filter: drop-shadow(0 0 25px red);
    }
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
    border-color: ${(props) => props.theme.colors.buttonHovBorder};
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 90px ${(props) => props.theme.colors.shadows};
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
    background-color: ${(props) => props.theme.colors.sandwishButton};
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
