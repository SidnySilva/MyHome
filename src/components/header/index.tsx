import { ButtonContainer, Container, Perfil } from "./styles";
import { Button, ButtonLang, SandwishButton } from "../button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Br from "../../assets/brazil.png";
import Us from "../../assets/us.png";
import { PopupColors } from "../popup";

export const Header = () => {
  const navidate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <Perfil >
        <h1 onClick={() => navidate(`/`)}>My Home</h1>
        <PopupColors />
      </Perfil>
      <ButtonContainer>
        {window.innerWidth > 1000 ? (
          <>
            <ButtonLang img={Us} onClick={() => handleLanguage("en")} />
            <ButtonLang img={Br} onClick={() => handleLanguage("pt")} />
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
