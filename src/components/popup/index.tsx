import { Button, ButtonLang } from "../button";
import { ColorPallete, Container } from "./styles";
import { useTranslation } from "react-i18next";
import Br from "../../assets/brazil.png";
import Us from "../../assets/us.png";
import { useTheme } from "../../contexts/themeProvider";
import {
  fifthTheme,
  firstTheme,
  fourthTheme,
  secondTheme,
  sixthTheme,
  thirdTheme,
} from "../../styles/themes";
import { useState } from "react";

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

export const PopupColors = () => {
  const { setTheme } = useTheme();
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    popup ? setPopup(false) : setPopup(true);
  };

  return (
    <ColorPallete onClick={handlePopup}>
      <p>C</p>

      {popup ? (
        <>
          <div className='default' onClick={() => setTheme(firstTheme)}></div>
          <div className='blue' onClick={() => setTheme(secondTheme)}></div>
          <div className='red' onClick={() => setTheme(thirdTheme)}></div>
          <div className='yellow' onClick={() => setTheme(fourthTheme)}></div>
          <div className='green' onClick={() => setTheme(fifthTheme)}></div>
          <div className='purple' onClick={() => setTheme(sixthTheme)}></div>
        </>
      ) : (
        <></>
      )}
    </ColorPallete>
  );
};
