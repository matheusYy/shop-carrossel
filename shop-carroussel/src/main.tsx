import React from "react";
import ReactDOM from "react-dom/client";
import { Carrossel } from "./interface/carrossel";
import { Main } from "./interface/main/main";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
