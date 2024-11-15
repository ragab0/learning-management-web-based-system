import React from "react";
import "./TabMyCourses.css";
import MyHeader from "../MyHeader/MyHeader";
import Courses from "./Courses";
import { NavLink } from "react-router-dom";
import { fetchEnrolledCourses } from "../../../../../../store/slices/studentSlice";

const sortOptions = [
  // { name: "progress", value: "progress" },
  { name: "rating", value: "rate" },
  { name: "category", value: "catg" },
];

export default function TabMyCourses({ isArchived }) {
  return (
    <div className="tab-my-courses">
      <MyHeader
        title="courses"
        sortOptions={sortOptions}
        thinkAction={fetchEnrolledCourses}
      >
        <ul className=" d-flex filter-tabs gap-2">
          <li>
            <NavLink
              to={`/profile/courses`}
              className="btn btn-outline-dark px-4 fw-bold"
              end
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/profile/courses/archived`}
              className="btn btn-outline-dark px-4 fw-bold"
            >
              Archived
            </NavLink>
          </li>
        </ul>
      </MyHeader>
      <Courses isArchived={isArchived} />
    </div>
  );
}
