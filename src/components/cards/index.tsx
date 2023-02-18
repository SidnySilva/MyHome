import { Container } from "./styles";

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
