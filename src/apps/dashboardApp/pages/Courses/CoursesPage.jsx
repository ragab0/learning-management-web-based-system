import React from "react";
import "./CoursesPage.css";
import CoursesList from "./Components/CoursesList/CoursesList";

export default function CoursesPage() {
  return (
    <div className="courses-dash-page ms-4 w-100">
      <h2>Courses list...</h2>
      <CoursesList />
    </div>
  );
}
