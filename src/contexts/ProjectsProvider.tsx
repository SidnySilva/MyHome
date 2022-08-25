import { AxiosRequestConfig } from "axios";
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

interface ProjectsContextData {
  data: IProject[];
  getProjects: () => Promise<void>;
  loading: boolean;
}
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
  const [data, setData] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);

  const getProjects = useCallback(async () => {
    setLoading(true);
    const option: AxiosRequestConfig<any> = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("@MyHome: accessToken")}`,
      },
    };
    await api
      .get("/projects", option)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setData(data.projects);
      });
  }, []);
  return (
    <ProjectsContext.Provider
      value={{
        data: data,
        getProjects,
        loading,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
