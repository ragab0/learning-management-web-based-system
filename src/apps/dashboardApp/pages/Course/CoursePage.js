import React, { useEffect } from "react";
import "./CoursePage.css";
import { Outlet } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";

const tabs = [
  // { name: "commission", to: ".", end: true },
  { name: "customers", to: ".", end: true },
  { name: "chapters" },
  { name: "reviews" },
  { name: "promotion" },
  { name: "details" },
  { name: "settings" },
];

export default function CoursePage() {
  useEffect(function () {}, []);

  return (
    <div className="course-dash-page p-3">
      <header className="course-page-header">
        <h2>Data structures & Algorithms</h2>
        <Tabs tabs={tabs} />
      </header>
      <div className="course-page-body">
        <Outlet />
      </div>
    </div>
  );
}
