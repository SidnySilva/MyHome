import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
  transform:translateX(-30px);
}
to{
  transform:translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  background-color: #111;
  border: 4px solid black;
  border-radius: 10px;
  width: 50vw;
  gap: 3px;
  color: white;
  margin-top: 10px;
  animation: ${animate} 1s;
  :nth-child(even) {
    animation: ${animate} 1s;
  }
  img {
    border-radius: 10px 0 0 10px;
    width: 250px;
    height: 300px;
  }
  .info {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
  transition: 1s;
  :hover {
    transition: 0s;
    border-color: cyan;
  }
  .footer {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: flex-end;
  }

  .engines {
    display: flex;
    gap: 10px;
    img {
      border-radius: 0;
      width: 25px;
      height: 25px;
    }
  }
`;
