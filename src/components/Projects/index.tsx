import { Cards } from "../cards";
import { Container, FilterButton } from "./styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProject } from "../../contexts/ProjectsProvider";
import { Loading } from "../loading";

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
  const [filter, setFilter] = useState(" ");
  const { data, getProjects, loading } = useProject();

  const { t } = useTranslation();

  useEffect(() => {
    getProjects();
    if (filter === "") {
      setProjects(data);
    } else {
      setProjects(data.filter((el) => el.type === filter));
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

        <div className='cardContainer'>
          {loading ? (
            <Loading />
          ) : (
            projects?.map((el: any) => (
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
            ))
          )}
        </div>
      </Container>
    </>
  );
};
