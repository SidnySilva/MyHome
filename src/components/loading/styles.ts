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
    color: ${(props) => props.theme.colors.text};
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
    border-top: 4px solid ${(props) => props.theme.colors.loadingTrack1};
    animation: ${animate} 3s linear infinite;
    ::before {
      content: "";
      position: absolute;
      top: 12px;
      right: 12px;
      width: 15px;
      height: 15px;
      background: ${(props) => props.theme.colors.loadingTrack1};
      border-radius: 50%;
      box-shadow: 0 0 0 5px
          ${(props) => props.theme.colors.loadingTrack1 + "33"},
        0 0 0 10px ${(props) => props.theme.colors.loadingTrack1 + "22"},
        0 0 0 20px ${(props) => props.theme.colors.loadingTrack1 + "11"},
        0 0 20px ${(props) => props.theme.colors.loadingTrack1},
        0 0 50px ${(props) => props.theme.colors.loadingTrack1};
    }
    :nth-child(2) {
      animation: ${animate} 3s linear infinite reverse;
      animation-delay: -1s;
      border-top: 4px solid transparent;
      border-left: 4px solid ${(props) => props.theme.colors.loadingTrack2};
      ::before {
        content: "";
        position: absolute;
        top: initial;
        bottom: 12px;
        left: 12px;
        width: 15px;
        height: 15px;
        background-color: ${(props) => props.theme.colors.loadingTrack2};
        border-radius: 50%;
        box-shadow: 0 0 0 5px
            ${(props) => props.theme.colors.loadingTrack2 + "33"},
          0 0 0 10px ${(props) => props.theme.colors.loadingTrack2 + "22"},
          0 0 0 20px ${(props) => props.theme.colors.loadingTrack2 + "11"},
          0 0 20px ${(props) => props.theme.colors.loadingTrack2},
          0 0 50px ${(props) => props.theme.colors.loadingTrack2};
      }
    }
    :nth-child(3) {
      animation: ${animate} 3s linear infinite reverse;
      animation-delay: -3s;
      border-top: 4px solid transparent;
      border-left: 4px solid ${(props) => props.theme.colors.loadingTrack3};
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
        background-color: ${(props) => props.theme.colors.loadingTrack3};
        border-radius: 50%;
        box-shadow: 0 0 0 5px
            ${(props) => props.theme.colors.loadingTrack3 + "33"} 0 0 0 10px,
          ${(props) => props.theme.colors.loadingTrack3 + "22"} 0 0 0 20px,
          ${(props) => props.theme.colors.loadingTrack3 + "11"} 0 0 20px,
          ${(props) => props.theme.colors.loadingTrack3},
          0 0 50px ${(props) => props.theme.colors.loadingTrack3};
      }
    }
  }
  @media (min-width: 1000px) {
    margin-top: 15em;
  }
`;
