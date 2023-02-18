import { compareEngines } from "../../utils/engines";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CardPopup } from "../cardsPopup";

interface Infos {
  onClick:()=>void;
  projectPicture: string;
  projectName: string;
  description: string[];
  projectType: string;
  date: string;
  link: string[];
  engines: string[];
  id: number;
}

export const Cards = (project: Infos) => {
  const engines = compareEngines(project.engines);
  const { i18n } = useTranslation();

  return (
    <Container onClick={project.onClick}
      key={`card-${project.id}`}
    >
      <span className="base"></span>
      <span className="title">{project.projectName}</span>
      <span className="icon">
        <img src={project.projectPicture} alt={`logo ${project.projectName}`} />
      </span>
      
    </Container>
  );
};
