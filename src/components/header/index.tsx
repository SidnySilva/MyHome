import { ButtonContainer, Container, Figure, Perfil } from "./styled";
import ProfileFoto from "../../assets/Eu.jpg";
import { Button } from "../button";

export const Header = () => {
  return (
    <Container>
      <Perfil>
        <Figure>
          <img className='img' src={ProfileFoto} alt='Foto do Sidny' />
        </Figure>
        <h1>Sidny Silva</h1>
      </Perfil>
      <ButtonContainer>
        <Button page={"projects"} text={"Projetos"} />
        <Button page={"games"} text={"games"} />
        <Button page={"aboutMe"} text={"Sobre mim"} />
      </ButtonContainer>
    </Container>
  );
};
