import { Cards } from "../cards";
import { Container } from "./styles";
import redux from "../../assets/redux.png";
import styled from "../../assets/styled.png";
import ts from "../../assets/typescript.png";
export const Projects = () => {
  const array = [
    {
      projectPicture: redux,
      projectName: "Project Name",
      projectType: "project Type",
      date: "29/07/1999",
      link: ["", "git"],
      description: "Description",
      engines: ["js", "node"],
    },
    {
      projectPicture: styled,
      projectName: "Project Name",
      projectType: "project Type",
      date: "29/07/1999",
      link: ["project", "git"],
      description: "Description",
      engines: ["js", "node", "prisma", "react", "redux", "ts", "chakra"],
    },
    {
      projectPicture: ts,
      projectName: "Project Name",
      projectType: "project Type",
      date: "29/07/1999",
      link: ["project", "git"],
      description: "Description",
      engines: ["js", "python", "react", "ts", "chakra"],
    },
    {
      projectPicture: ts,
      projectName: "Project Name",
      projectType: "project Type",
      date: "29/07/1999",
      link: ["project", "git"],
      description: "Description",
      engines: ["node", "prisma", "react", "redux", "ts"],
    },
  ];
  return (
    <>
      <Container>
        {array.map((el, i) => (
          <Cards
            id={i}
            projectPicture={el.projectPicture}
            projectName={el.projectName}
            projectType={el.projectType}
            date={el.date}
            link={el.link}
            description={el.description}
            engines={el.engines}
          />
        ))}
      </Container>
    </>
  );
};
