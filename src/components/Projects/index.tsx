import { Cards } from "../cards";
import { Container } from "./styles";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";

interface IProjects {
  projectPicture: string;
  projectName: string;
  projectType: string;
  date: string;
  link: string;
  description: string;
  engines: string;
}

export const Projects = () => {
  const [teste, setTeste] = useState<any>([]);
  const [start, setStart] = useState(true);

  const req = useCallback(async () => {
    const response = await api.get("projects");
    setTeste(response.data);
  }, []);

  if (start) {
    req();
    setStart(false);
  }

  console.log(teste);
  return (
    <>
      <Container>
        {teste.length !== 0 ? (
          teste.map(({ el, i }: any) => (
            <Cards
              key={`cards-${i}`}
              id={i}
              projectPicture={el.imageLink}
              projectName={el.name}
              projectType={el.type}
              date={el.date}
              link={el.links}
              description={el.description}
              engines={el.engines}
            />
          ))
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
