import React from "react";
import "./CoursesList.css";
import { Link } from "react-router-dom";

export default function CoursesList() {
  return (
    <div className="courses-list">
      {[...new Array(9)].map((_, i) => (
        <Link to={"" + i} key={i}>
          Course number: {i}
        </Link>
      ))}
    </div>
  );
}
