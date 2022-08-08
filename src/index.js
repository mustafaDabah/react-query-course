import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/todos/api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiSlice}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);
