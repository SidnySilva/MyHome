import { Button } from "../button";
import { Container } from "./styles";

export const Popup = () => {
  return (
    <Container>
      <Button page={"projects"} text={"Projetos"} />
      <Button page={"games"} text={"games"} />
      <Button page={"aboutMe"} text={"Sobre mim"} />
    </Container>
  );
};
