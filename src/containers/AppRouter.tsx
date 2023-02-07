import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { IntroPage } from "../pages/intro";
import { Admin } from "../pages/admin";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/" element={<IntroPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/invitacion" element={<HomePage />} />
    </Routes>
  );
};
