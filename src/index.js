import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import "core-js/stable";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 以下だと動かない
// import React from "react";
// import createRoot from "react-dom/client";
// import { App } from "./components/App";

// const root = createRoot(document.getElementById("root"));

// root.render(<App />);
