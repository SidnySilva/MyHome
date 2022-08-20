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
  height: 80%;
  margin-top: 10px;
  animation: ${animate} 1s;
  :nth-child(even) {
    animation: ${animate} 1s;
  }
  img {
    padding-top: 10px;
    align-self: center;
    border-radius: 10px;
    width: 100%;
    height: 150px;
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

  .footer {
    display: flex;
    width: 90%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }

  .engines {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    gap: 10px;
    img {
      border-radius: 0;
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    width: 50vw;
    img {
      border-radius: 10px 0 0 10px;
      width: 250px;
      height: 300px;
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
