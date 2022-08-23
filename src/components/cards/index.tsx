import { compareEngines } from "../../utils/engines";
import { Container } from "./styles";

interface Infos {
  projectPicture: string;
  projectName: string;
  description: string;
  projectType: string;
  date: string;
  link: string[];
  engines: string[];
  id: number;
}

export const Cards = (project: Infos) => {
  const engines = compareEngines(project.engines);
  console.log("nome", project.projectName);

  return (
    <Container key={`card-${project.id}`}>
      <div>
        <img src={project.projectPicture} alt={`logo ${project.projectName}`} />
      </div>
      <div className='info'>
        <h1>
          {project.projectName} - {project.projectType}
        </h1>
        <p className='desc'>{project.description}</p>
        <p className='data'>{project.date}</p>
        <div className='footer'>
          <div className='links'>
            {project.link[0] === "" ? (
              <>
                <p>
                  <a href={project.link[1]}>Link Github</a>
                </p>
              </>
            ) : (
              <>
                <p>
                  <a href={project.link[0]}>Link Project</a>
                  <br />
                  <a href={project.link[1]}>Link Github</a>
                </p>
              </>
            )}
          </div>
          <div className='engines'>
            {engines.map((el, i) => (
              <img key={`img-${i}`} src={el} alt={`${el} Logo`} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
