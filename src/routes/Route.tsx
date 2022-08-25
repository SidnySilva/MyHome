import { Routes, Route } from "react-router-dom";
import { AboutMe } from "../components/aboutMe";
import { Projects } from "../components/Projects";
import { Games } from "../components/games";
import { Home } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/games' element={<Games />} />
      <Route path='/aboutMe' element={<AboutMe />} />
    </Routes>
  );
};
