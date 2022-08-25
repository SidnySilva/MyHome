import { Container } from "./styles";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>My Home</h1>
      <p>{t("Initial.1")}</p>
    </Container>
  );
};
