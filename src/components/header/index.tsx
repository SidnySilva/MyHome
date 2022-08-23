import { ButtonContainer, Container, Figure, Perfil } from "./styled";
import { Button, ButtonLang, SandwishButton } from "../button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileFoto from "../../assets/Eu.jpg";
import Br from "../../assets/brazil.png";
import Us from "../../assets/us.png";

export const Header = () => {
  const [wide, setWide] = useState(0);
  window.addEventListener(`resize`, () => {
    setWide(window.innerWidth);
  });

  const { t, i18n } = useTranslation();

  const handleClick = (language: string) => {
    i18n.changeLanguage(language);
  };
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
            <ButtonLang img={Us} onClick={() => handleClick("en")} />
            <ButtonLang img={Br} onClick={() => handleClick("pt")} />
            <Button page={"projects"} text={t("Projects.1")} />
            <Button page={"games"} text={t("Games.1")} />
            <Button page={"aboutMe"} text={t("AboutMe.1")} />
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
