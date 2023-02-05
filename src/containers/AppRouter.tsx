import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { IntroPage } from "../pages/intro";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/" element={<IntroPage />} />
    </Routes>
  );
};
