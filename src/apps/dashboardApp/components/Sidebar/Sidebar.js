import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
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
    </aside>
  );
}
