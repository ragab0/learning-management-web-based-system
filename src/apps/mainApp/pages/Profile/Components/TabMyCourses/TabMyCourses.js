import React from "react";
import "./TabMyCourses.css";
import { myCourses } from "../../../../../../data/dummyData";
import { NavLink, Outlet } from "react-router-dom";

export default function TabMyCourses() {
  return (
    <div className="tab-my-courses">
      <header className="header col-12">
        <h2>
          my courses<span className="ms-2 fs-5">({myCourses.length})</span>
        </h2>
        <ul className=" d-flex filter-tabs gap-2">
          <li>
            <NavLink to={`.`} className="btn btn-outline-dark px-4 fw-bold" end>
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`./archived`}
              className="btn btn-outline-dark px-4 fw-bold"
            >
              Archived
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}
