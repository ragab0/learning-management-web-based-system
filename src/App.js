import React from "react";
import { Route, Routes } from "react-router-dom";
import MainApp from "./apps/mainApp/App";
import DashboardApp from "./apps/dashboardApp/App";
import AdminApp from "./apps/adminApp/App";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainApp />} />
      <Route path="/dashboard/*" element={<DashboardApp />} />
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
