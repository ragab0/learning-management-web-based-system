import React from "react";
import "./CourseContentNav.css";
import Star from "../../../../../../assets/svgsComps/Star";

export default function CourseContentNav({ title }) {
  return (
    <nav className="course-content-nav d-flex align-items-center justify-content-between ps-4">
      <div className="d-flex align-items-center gap-4">
        <h1 className="text-white h5">{title}</h1>
      </div>
      <button className="btn text-white d-flex align-items-center gap-2">
        <Star />
        Provide Rating
      </button>
    </nav>
  );
}
