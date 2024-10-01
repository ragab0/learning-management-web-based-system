import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside
      className="sidebar"
      style={
        location.pathname.includes("login") ||
        location.pathname.includes("signup")
          ? {
              display: "none",
            }
          : {}
      }
    >
      <header></header>
      <nav>
        <ul>
          <li>
            <Link to={"/dashboard"}>dashboard</Link>
          </li>
          <li>
            <Link to={"/dashboard/courses"}>courses</Link>
          </li>
          <li>
            <Link to={"/dashboard/communication"}>communication</Link>
          </li>
          <li>
            <Link to={"/dashboard/revenue"}>revenue</Link>
          </li>
          <li>
            <Link to={"/dashboard/settings"}>settings</Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </aside>
  );
}
