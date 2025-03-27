import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import { UserPage } from "./view/UserPage.jsx";
import { MenuPage } from "./view/MenuPage.jsx";
import "devextreme/dist/css/dx.light.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="user" element={<UserPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
