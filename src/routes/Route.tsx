import { Routes, Route } from "react-router-dom";
import { AboutMe } from "../pages/aboutMe";
import { Projects } from "../pages/Projects";
import { Games } from "../pages/games";
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
