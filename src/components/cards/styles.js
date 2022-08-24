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
  justify-content: center;
  align-items: center;
  background-color: #111;
  border: 4px solid black;
  border-radius: 10px;
  min-width: 300px;
  gap: 3px;
  color: white;
  max-height: 80%;
  margin-top: 10px;
  animation: ${animate} 1s;
  :nth-child(even) {
    animation: ${animate} 1s;
  }
  .foto {
    display: flex;
    overflow: hidden;
  }
  img {
    padding-top: 10px;
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .desc {
      font-size: 18px;
    }
    h1 {
      margin: 20px 0 20px 0;
    }
  }
  a {
    color: cyan;
  }
  .data {
    align-self: flex-end;
    margin: 10px 10px 10px 0;
  }
  .desc {
    overflow-y: scroll;
    max-height: 100px;
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
      border-radius: 0;
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    img {
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .info {
      justify-content: space-evenly;
    }
    transition: 1s;
    :hover {
      transition: 0s;
      border-color: cyan;
    }
    .footer {
      align-items: flex-end;
    }
  }
`;
