import { Cards } from "../../components/cards";
import { Container, FilterButton } from "./styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../../utils/projects";
import { CardPopup } from "../../components/cardsPopup";

interface IState {
  imageLink: string;
  name: string;
  type: string;
  description: string[];
  date: string;
  links: string[];
  engines: string[];
}

export const Projects = () => {
  // const { data, getProjects, loading } = useProject();

  const [data, setData] = useState<IState[]>([]);
  const [selectedItem, setSelectedItem] = useState<IState>();
  //
  const [popup, setPopup] = useState(false);

  const handleClick = (item: any) => {
    setSelectedItem(item);
    popup ? setPopup(false) : setPopup(true);
  };

  const getProjects = (type: string) => {
    return type
      ? setData(projects.filter((el) => el.type === type))
      : setData(projects);
  };
  const { t } = useTranslation();

  useEffect(() => {
    getProjects("");
  }, []);
  return (
    <Container>
      <div className="buttonHolder">
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

      <ul className="cardContainer">
        {data.map((el: any) => (
          <Cards
            onClick={() => handleClick(el)}
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
        {popup && selectedItem ? (
          <CardPopup
            onClick={()=> handleClick(selectedItem)}
            key={`cardsPop-${selectedItem.name}`}
            id={selectedItem.name}
            projectPicture={selectedItem?.imageLink}
            projectName={selectedItem?.name}
            projectType={selectedItem?.type}
            date={selectedItem?.date}
            link={selectedItem?.links}
            description={selectedItem?.description}
            engines={selectedItem?.engines}
          />
        ) : (
          <></>
        )}
      </ul>
    </Container>
  );
};
