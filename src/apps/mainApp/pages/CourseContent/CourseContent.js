import React from "react";
import "./CourseContent.css";
import CourseContentAside from "./Components/CourseContentAside/CourseContentAside";
import CourseContentMain from "./Components/CourseContentMain/CourseContentMain";
import CourseContentNav from "./Components/CourseContentNav/CourseContentNav";

export default function CourseContent() {
  return (
    <div className="course-content-page">
      <CourseContentNav title={"Introduction to User Experience Design"} />
      <div className="content-aside-layout gap-0">
        <CourseContentMain />
        <CourseContentAside />
      </div>
    </div>
  );
}
