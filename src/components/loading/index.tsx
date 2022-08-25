import { LoadContainer } from "./styles";
import { useTranslation } from "react-i18next";

export const Loading = () => {
  const { t } = useTranslation();
  return (
    <LoadContainer className='load'>
      <div className='ring'></div>
      <div className='ring'></div>
      <div className='ring'></div>
      <p>{t("Loading.1")}</p>
    </LoadContainer>
  );
};
