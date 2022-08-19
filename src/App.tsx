import "./App.css";
import { Background } from "./components/background/background";
import { Header } from "./components/header";
import { Router } from "./routes/Route";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router />
      <Background />
    </div>
  );
}

export default App;
