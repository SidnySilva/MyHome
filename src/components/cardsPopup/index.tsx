import { useTranslation } from "react-i18next";
import { changeDateFormat } from "../../utils/dateFormat";
import { compareEngines } from "../../utils/engines";
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
  id: string;
}

export const CardPopup = (project: Infos) => {
  const engines = compareEngines(project.engines);
  const { i18n } = useTranslation();

  return (
    <Container onClick={project.onClick} key={`cardPop-${project.id}`}>
      <div className="items">
        <div className="info">
          <h1>
            {project.projectName} - {project.projectType}
          </h1>
          <p className="desc">
            {i18n.language === "pt"
              ? project.description[0]
              : project.description[1]}
          </p>
          <p className="data">
            {i18n.language === "pt"
              ? project.date
              : changeDateFormat(project.date)}
          </p>
          <div className="footer">
            <div className="links">
              {project.link.length === 1 ? (
                <>
                  <p>
                    <a target="_blank" rel="noreferrer" href={project.link[0]}>
                      Link Github
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <a target="_blank" rel="noreferrer" href={project.link[0]}>
                      Link Project
                    </a>
                    <br />
                    <a target="_blank" rel="noreferrer" href={project.link[1]}>
                      Link Github
                    </a>
                  </p>
                </>
              )}
            </div>
            <div className="engines">
              {engines.map((el, i) => (
                <img key={`img-${i}`} src={el} alt={`${el} Logo`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
