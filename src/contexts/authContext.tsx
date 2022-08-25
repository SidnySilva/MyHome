import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  password: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface GoOnCredentials {
  data1: string;
  data2: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  GoOn: (Credential: GoOnCredentials) => Promise<void>;
  initial: boolean;
  setInitial: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [initial, setInitial] = useState(true);
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@MyHome: accessToken");
    const user = localStorage.getItem("@MyHome: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const GoOn = useCallback(async ({ data1, data2 }: GoOnCredentials) => {
    const response = await api.post("login", { data1, data2 });
    const { token } = response.data;

    localStorage.setItem("@MyHome: accessToken", token);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        GoOn,
        initial,
        setInitial,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
