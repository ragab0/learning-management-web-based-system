import React from "react";
import "./ChaptersTab.css";
import { NavLink, Outlet } from "react-router-dom";

export default function ChaptersTab() {
  return (
    <div className="chapters-tab">
      <header className="chapters-tab-header">
        <h2>Data structures & Algorithms</h2>
        <ul className="chapters-tab-tabs">
          <li>
            <NavLink to="" end>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="resources">Resources</NavLink>
          </li>
        </ul>
      </header>
      <div className="chapters-tab-body">
        <Outlet />
      </div>
    </div>
  );
}
