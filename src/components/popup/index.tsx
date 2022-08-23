import { Button, ButtonLang } from "../button";
import { Container } from "./styles";
import { HandleClick } from "../../utils/languages";
import { useTranslation } from "react-i18next";
import Br from "../../assets/brazil.png";
import Us from "../../assets/us.png";

export const Popup = () => {
  const { i18n } = useTranslation();

  const handleClick = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <Container>
      <Button page={"projects"} text={"Projetos"} />
      <Button page={"games"} text={"games"} />
      <Button page={"aboutMe"} text={"Sobre mim"} />
      <div>
        <ButtonLang img={Us} onClick={() => handleClick("en")} />
        <ButtonLang img={Br} onClick={() => handleClick("pt")} />
      </div>
    </Container>
  );
};
