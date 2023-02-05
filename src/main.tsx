import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./containers/AppRouter";

import { DataContextProvider } from "./context/dataContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>
);
