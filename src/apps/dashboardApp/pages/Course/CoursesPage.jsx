import React from "react";
import "./CoursePage.css";
import { Outlet, useLocation } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";

const tabs = [
  { name: "commission", to: ".", end: true },
  { name: "reviews" },
  { name: "customer" },
  { name: "chapters" },
  { name: "promotion" },
  { name: "details" },
  { name: "settings" },
];

export default function CoursePage() {
  const location = useLocation();

  return (
    <div className="course-dash-page ms-2 p-3">
      <header
        className="course-page-header"
        style={
          location.pathname.includes("chapters") ? { display: "none" } : {}
        }
      >
        <h2>Data structures & Algorithms</h2>
        <Tabs tabs={tabs} />
      </header>
      <div className="course-page-body">
        <Outlet />
      </div>
    </div>
  );
}
