import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

interface ProjectProviderProps {
  children: ReactNode;
}
interface ProjectsState {
  imageLink: string;
  name: string;
  type: string;
  description: string;
  date: string;
  links: string[];
  engines: string[];
}
interface ProjectsContextData {
  imageLink: string;
  name: string;
  type: string;
  description: string;
  date: string;
  links: string[];
  engines: string[];
  getProjects: () => Promise<void>;
}

const ProjectsContext = createContext<ProjectsContextData>(
  {} as ProjectsContextData,
);

export const useProject = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProject must be used within an ProjectProvider");
  }
  return context;
};
export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [data, setData] = useState<ProjectsState>({} as ProjectsState);

  const getProjects = useCallback(async () => {
    const response = await api.get("projects");
    const { imageLink, name, type, description, date, links, engines } =
      response.data;
    setData({ imageLink, name, type, description, date, links, engines });
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        imageLink: data.imageLink,
        name: data.name,
        type: data.type,
        description: data.description,
        date: data.date,
        links: data.links,
        engines: data.engines,
        getProjects,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
