import { Button, ButtonLang } from "../button";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import Br from "../../assets/brazil.png";
import Us from "../../assets/us.png";

export const Popup = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <Container>
      <Button page={"projects"} text={t("Projects.1")} />
      <Button page={"games"} text={t("Games.1")} />
      <Button page={"aboutMe"} text={t("AboutMe.1")} />
      <div>
        <ButtonLang img={Us} onClick={() => handleClick("en")} />
        <ButtonLang img={Br} onClick={() => handleClick("pt")} />
      </div>
    </Container>
  );
};
