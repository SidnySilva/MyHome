import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popup } from "../popup";
import { ButtonLanguage, Buttons, SandButton } from "./styles";

interface ButtonProps {
  text: string;
  page: string;
}

export const Button = (children: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <Buttons onClick={() => navigate(`/${children.page}`)}>
      {children.text}
    </Buttons>
  );
};

export const SandwishButton = () => {
  const [popup, setPopup] = useState(false);

  const changePopup = () => {
    popup ? setPopup(false) : setPopup(true);
  };
  return (
    <SandButton onClick={() => changePopup()}>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      {popup ? <Popup /> : <></>}
    </SandButton>
  );
};

interface Lang {
  img: string;
  onClick: () => void;
}

export const ButtonLang = (children: Lang) => {
  return (
    <ButtonLanguage onClick={children.onClick}>
      <img src={children.img} alt='' />
    </ButtonLanguage>
  );
};
