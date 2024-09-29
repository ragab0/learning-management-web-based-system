import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Aside.css";

export default function Aside() {
  const { pathname } = useLocation();

  return (
    <aside className="profile-page-aside">
      <header>Aside</header>
      <ul>
        <li>
          <NavLink
            to=""
            className={(e) => (pathname === "/profile" ? "active" : "")}
          >
            profile
          </NavLink>
        </li>
        <li>
          <NavLink to="my-courses">my courses</NavLink>
        </li>
        <li>
          <NavLink to="teachers">teachers</NavLink>
        </li>
        <li>
          <NavLink to="message">message</NavLink>
        </li>
        <li>
          <NavLink to="my-reviews">my reviews</NavLink>
        </li>
      </ul>
    </aside>
  );
}
