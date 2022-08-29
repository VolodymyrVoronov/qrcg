import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";

import { App } from "./components/App/App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
