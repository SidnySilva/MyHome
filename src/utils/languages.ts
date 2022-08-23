import { useTranslation } from "react-i18next";

export const HandleClick = (language: string) => {
  const { i18n } = useTranslation();

  i18n.changeLanguage(language);
};
