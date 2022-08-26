import { Cards } from "../../components/cards";
import { Container, FilterButton } from "./styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProject } from "../../contexts/ProjectsProvider";
import { Loading } from "../../components/loading";

export const Projects = () => {
  const { data, getProjects, loading } = useProject();

  const { t } = useTranslation();

  useEffect(() => {
    getProjects("");
  }, []);
  return (
    <>
      <Container>
        <div className='buttonHolder'>
          <FilterButton onClick={() => getProjects("Front-end")}>
            Front-end
          </FilterButton>
          <FilterButton onClick={() => getProjects("Back-end")}>
            Back-end
          </FilterButton>
          <FilterButton onClick={() => getProjects("Full-Stack")}>
            Full-Stack
          </FilterButton>
          <FilterButton onClick={() => getProjects("")}>
            {t("All.1")}
          </FilterButton>
        </div>
        <div className='cardContainer'>
          {loading ? (
            <Loading />
          ) : (
            data?.map((el: any) => (
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
