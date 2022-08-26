import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "../services/api";

interface ProjectProviderProps {
  children: ReactNode;
}

interface ProjectsContextData {
  data: IProject[];
  setData: Dispatch<SetStateAction<IProject[]>>;
  getProjects: (type: string) => Promise<void>;
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

  const getProjects = useCallback(async (type: string) => {
    setLoading(true);
    await api
      .get("projects")
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        if (type) {
          setData(data.filter((el: any) => el.type === type));
        } else {
          setData(data);
        }
      });
  }, []);
  return (
    <ProjectsContext.Provider
      value={{
        data: data,
        setData,
        getProjects,
        loading,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
