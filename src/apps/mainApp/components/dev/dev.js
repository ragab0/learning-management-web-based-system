import React from "react";
import { NavLink } from "react-router-dom";
import "./dev.css";

export default function Dev() {
  return (
    <div className="for-development">
      <ul className="container">
        <li>
          <NavLink to="/courses/1">CoursePage</NavLink>
        </li>
        <li>
          <NavLink to="/mentors/1">MentorPage</NavLink>
        </li>
        <li>
          <NavLink to="/profile">ProfilePage</NavLink>
        </li>
        <li>
          <NavLink to="/study/0">CourseContent</NavLink>
        </li>
      </ul>
    </div>
  );
}
