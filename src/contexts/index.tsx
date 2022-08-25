import { ReactNode } from "react";
import { AuthProvider } from "./authContext";
import { ProjectProvider } from "./ProjectsProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ProjectProvider>{children}</ProjectProvider>
    </AuthProvider>
  );
};
