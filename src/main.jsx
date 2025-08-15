import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
