import styled from "styled-components";

export const Container = styled.section`
  z-index: 2;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100vw;
`;
export const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  button {
    margin: 0 2rem;
  }
`;
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  h1 {
    margin-left: 20px;
    font-size: 32px;
    color: white;
    text-overflow: clip;
  }
`;
export const Figure = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 2;
  .img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
  }
`;
