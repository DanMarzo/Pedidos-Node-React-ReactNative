import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/app";
import GlobalStyled from "./shared/styles/GlobalStyled";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
  </React.StrictMode>
);
