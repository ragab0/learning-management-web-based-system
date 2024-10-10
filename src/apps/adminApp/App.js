import React from "react";
import "./App.css";
import useLoginCheck from "../../hooks/useLoginCheck";

export default function AdminApp() {
  useLoginCheck();
  return <div className="admin-app">AdminApp</div>;
}
