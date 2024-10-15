import React from "react";
import "./App.css";
import useLoginCheck from "../../hooks/useLoginCheck";

const ROLE = "admin";

export default function AdminApp() {
  useLoginCheck();
  return (
    <div className="admin-app">
      <div className="app-wrapper">admin page admin app 123abcdfdcvgfd</div>
    </div>
  );
}
