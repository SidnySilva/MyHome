import { ComponentType } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";
import { AboutMe } from "../components/aboutMe";
import { Projects } from "../components/Projects";
import { Games } from "../components/games";
import { Dashboard } from "../pages/dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/games' element={<Games />} />
      <Route path='/aboutMe' element={<AboutMe />} />
    </Routes>
  );
};
