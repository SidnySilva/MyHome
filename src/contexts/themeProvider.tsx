import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { firstTheme, secondTheme } from "../styles/themes";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

interface Theme {
  name: string;
  colors: {
    header: string;
    bgColor: string;
    bgIcon: string;
    buttonBg: string;
    buttonBorder: string;
    buttonHovBorder: string;
    sandwishButton: string;
    text: string;
    link: string;
    shadows: string;
    iconHover: string;
    loadingTrack1: string;
    loadingTrack2: string;
    loadingTrack3: string;
  };
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(firstTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === "first") {
      setTheme(secondTheme);
    } else {
      setTheme(firstTheme);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
