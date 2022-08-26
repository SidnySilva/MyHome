import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;

export const LoadContainer = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0em;
  p {
    position: absolute;
    color: #fff;
    font-size: 1.5rem;
    bottom: -80px;
    letter-spacing: 0.15em;
  }
  .ring {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid transparent;
    margin: -30px;
    border-top: 4px solid cyan;
    animation: ${animate} 3s linear infinite;
    ::before {
      content: "";
      position: absolute;
      top: 12px;
      right: 12px;
      width: 15px;
      height: 15px;
      background: cyan;
      border-radius: 50%;
      box-shadow: 0 0 0 5px #24ecff33, 0 0 0 10px #24ecff22,
        0 0 0 20px #24ecff11, 0 0 20px #24ecff, 0 0 50px #24ecff;
    }
    :nth-child(2) {
      animation: ${animate} 3s linear infinite reverse;
      animation-delay: -1s;
      border-top: 4px solid transparent;
      border-left: 4px solid #93ff2d;
      ::before {
        content: "";
        position: absolute;
        top: initial;
        bottom: 12px;
        left: 12px;
        width: 15px;
        height: 15px;
        background-color: #93ff2d;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #93ff2d33, 0 0 0 10px #93ff2d22,
          0 0 0 20px #93ff2d11, 0 0 20px #93ff2d, 0 0 50px #93ff2d;
      }
    }
    :nth-child(3) {
      animation: ${animate} 3s linear infinite reverse;
      animation-delay: -3s;
      border-top: 4px solid transparent;
      border-left: 4px solid #e41cf8;
      position: absolute;
      top: -66.66px;
      ::before {
        content: "";
        position: absolute;
        top: initial;
        bottom: 12px;
        left: 12px;
        width: 15px;
        height: 15px;
        background-color: #e41cf8;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #e41cf833, 0 0 0 10px #e41cf822,
          0 0 0 20px #e41cf811, 0 0 20px #e41cf8, 0 0 50px #e41cf8;
      }
    }
  }
  @media (min-width: 1000px) {
    margin-top: 15em;
  }
`;
