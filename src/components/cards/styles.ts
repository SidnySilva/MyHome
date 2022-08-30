import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
  opacity: 0;
  transform:translateX(-30px);
}
to{
  opacity: 1;
  transform:translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgColor};
  border: 4px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 10px;
  gap: 3px;
  color: ${(props) => props.theme.colors.text};
  min-width: 300px;
  min-height: 95%;
  max-height: 95%;
  margin-top: 10px;
  animation: ${animate} 1s;
  :nth-child(even) {
    animation: ${animate} 1s;
  }
  .foto {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  img {
    image-rendering: pixelated;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  .info {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .desc {
      font-size: 18px;
      width: 80%;
      overflow-y: scroll;
      max-height: 60px;
    }
    h1 {
      font-size: 20px;
      margin: 20px 0 20px 0;
    }
  }
  a {
    color: ${(props) => props.theme.colors.link};
  }
  .data {
    align-self: flex-end;
    margin: 10px 10px 10px 0;
  }

  .footer {
    display: flex;
    width: 90%;
    height: 100px;
    padding-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .engines {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    max-height: 40px;
    width: 50%;
    gap: 10px;
    img {
      image-rendering: auto;
      border-radius: 0;
      width: 25px;
      height: 25px;
    }
  }
  @media (min-height: 900px) {
    .foto {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 250px;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: none;
    }
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    min-height: 50%;

    img {
      object-fit: inherit;
      padding: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px 0 0 5px;
    }
    .foto {
      width: 300px;
      height: 100%;
    }
    .info {
      justify-content: space-evenly;
      .desc {
        font-size: 28px;
        width: 80%;
        overflow-y: scroll;
        max-height: 100px;
      }
      h1 {
        font-size: 32px;
        margin: 20px 0 20px 0;
      }
    }
    transition: 1s;
    :hover {
      transition: 0s;
      border-color: ${(props) => props.theme.colors.buttonHovBorder};
    }
    .footer {
      align-items: flex-end;
    }
  }
  @media (min-width: 2500px) {
    width: 50vw;
    min-height: 50%;
    .foto {
      width: 600px;
      height: 100%;
    }
    .info {
      font-size: 24px;
      justify-content: space-evenly;
    }
    .footer {
      align-items: flex-end;
    }
    .engines {
      img {
        image-rendering: auto;
        border-radius: 0;
        width: 40px;
        height: 40px;
      }
    }
  }
`;
