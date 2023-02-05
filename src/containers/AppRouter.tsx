import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import DataContext from "../context/dataContext";
import { Home } from "../pages/home";
import { Splash } from "../pages/splash";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/" element={<Splash />} />
    </Routes>
  );
};
