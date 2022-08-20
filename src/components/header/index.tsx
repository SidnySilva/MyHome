import { ButtonContainer, Container, Figure, Perfil } from "./styled";
import ProfileFoto from "../../assets/Eu.jpg";
import { Button, SandwishButton } from "../button";
import { useState } from "react";

export const Header = () => {
  const [wide, setWide] = useState(0);
  window.addEventListener(`resize`, () => {
    setWide(window.innerWidth);
  });

  return (
    <Container>
      <Perfil>
        <Figure>
          <img className='img' src={ProfileFoto} alt='Foto do Sidny' />
        </Figure>
        <h1>Sidny Silva</h1>
      </Perfil>
      <ButtonContainer>
        {window.innerWidth > 1000 ? (
          <>
            <Button page={"projects"} text={"Projetos"} />
            <Button page={"games"} text={"games"} />
            <Button page={"aboutMe"} text={"Sobre mim"} />
          </>
        ) : (
          <>
            <SandwishButton />
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};
