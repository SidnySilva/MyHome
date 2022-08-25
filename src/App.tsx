import "./App.css";
import { Background } from "./components/background/background";
import { Header } from "./components/header";
import { AppProvider } from "./contexts";
import { Router } from "./routes/Route";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Header />
        <Router />
        <Background />
      </AppProvider>
    </div>
  );
}

export default App;
