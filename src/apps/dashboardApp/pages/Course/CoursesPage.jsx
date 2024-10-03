import React from "react";
import "./CoursePage.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function CoursePage() {
  const location = useLocation();

  return (
    <div className="course-page">
      <header
        className="course-page-header"
        style={
          location.pathname.includes("chapters") ? { display: "none" } : {}
        }
      >
        <h2>Data structures & Algorithms</h2>
        <ul className="course-page-tabs">
          <li>
            <NavLink to="" end>
              commission
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">reviews</NavLink>
          </li>
          <li>
            <NavLink to="customer">customer</NavLink>
          </li>
          <li>
            <NavLink to="chapters">chapters</NavLink>
          </li>
          <li>
            <NavLink to="promotion">promotion</NavLink>
          </li>
          <li>
            <NavLink to="details">details</NavLink>
          </li>
          <li>
            <NavLink to="settings">settings</NavLink>
          </li>
        </ul>
      </header>
      <div className="course-page-body">
        <Outlet />
      </div>
    </div>
  );
}
