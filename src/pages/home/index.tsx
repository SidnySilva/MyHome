import { useAuth } from "../../contexts/authContext";
import { Container } from "./styles";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Data {
  data1: string;
  data2: string;
}

export const Home = () => {
  const { GoOn, setInitial, initial } = useAuth();

  const { t } = useTranslation();

  useEffect(() => {
    if (initial) {
      const data: Data = {
        data1: t("Data.1"),
        data2: t("Data.2"),
      };
      GoOn(data);
      setInitial(false);
    }
  }, []);

  return (
    <Container>
      <h1>My Home</h1>
      <p>{t("Initial.1")}</p>
    </Container>
  );
};
