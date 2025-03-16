import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./i18n";
import "@refinedev/antd/dist/reset.css";

export interface Props {

}
export function renderAdmin(id="admin-root") {

const container = document.getElementById(id) as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);

}
