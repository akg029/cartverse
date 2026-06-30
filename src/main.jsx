import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);