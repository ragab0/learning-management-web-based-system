import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import useLoginCheck from "../../hooks/useLoginCheck";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../../components/NotFound/NotFound";

const ROLE = "admin";

export default function AdminApp() {
  useLoginCheck();
  return (
    <div className="admin-app">
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute roleOfRoute="admin" isLoaderWhite={true}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound role={ROLE} />} />
      </Routes>
    </div>
  );
}
