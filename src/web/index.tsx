import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DataConnection } from "./state/data-connection";

import "./index.css";
import { PageHeader } from "./components/page-header";
import { HomePage } from "./pages/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataConnection>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHeader />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataConnection>
);
