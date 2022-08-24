import { ReactNode } from "react";
import { ProjectProvider } from "./ProjectsProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ProjectProvider>{children}</ProjectProvider>
    </>
  );
};
