import { Container } from "./styles";
import { useTranslation } from "react-i18next";

export const Games = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("Games.1")}</h1>
      <div className='info'>
        <p className='text'>{t("Games.2")}</p>
        <p>{t("Games.3")}</p>
      </div>
      <button>
        <a href='https://sodyy.itch.io/' target='blank'>
          Itch.io
        </a>
      </button>
    </Container>
  );
};
