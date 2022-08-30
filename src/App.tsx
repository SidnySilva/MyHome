import "./App.css";
import { Background } from "./components/background/background";
import { Header } from "./components/header";
import { AppProvider } from "./contexts";
import { CustomThemeProvider } from "./contexts/themeProvider";
import { Router } from "./routes/Route";
import Global from "./styles/global";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <CustomThemeProvider>
          <Global />
          <Header />
          <Router />
          <Background />
        </CustomThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
