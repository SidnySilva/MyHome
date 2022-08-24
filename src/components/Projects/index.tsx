import { Cards } from "../cards";
import { Container, FilterButton } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTranslation } from "react-i18next";

interface IProject {
  imageLink: string;
  name: string;
  type: string;
  date: string;
  description: string[];
  links: string[];
  engines: string[];
  project_id: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [filter, setFilter] = useState("x");

  const { t } = useTranslation();
  useEffect(() => {
    api
      .get("projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter !== "") {
      setFilteredProjects(projects.filter((el) => el.type === filter));
    } else {
      setFilteredProjects(projects);
    }
  }, [filter]);
  return (
    <>
      <Container>
        <div className='buttonHolder'>
          <FilterButton onClick={() => setFilter("Front-end")}>
            Front-end
          </FilterButton>
          <FilterButton onClick={() => setFilter("Back-end")}>
            Back-end
          </FilterButton>
          <FilterButton onClick={() => setFilter("Full-Stack")}>
            Full-Stack
          </FilterButton>
          <FilterButton onClick={() => setFilter("")}>
            {t("All.1")}
          </FilterButton>
        </div>

        {filteredProjects?.map((el: any) => (
          <Cards
            key={`cards-${el.project_id}`}
            id={el.project_id}
            projectPicture={el?.imageLink}
            projectName={el?.name}
            projectType={el?.type}
            date={el?.date}
            link={el?.links}
            description={el?.description}
            engines={el?.engines}
          />
        ))}
      </Container>
    </>
  );
};
