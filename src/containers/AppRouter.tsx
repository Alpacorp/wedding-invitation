import { Route, Routes } from "react-router-dom";

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
