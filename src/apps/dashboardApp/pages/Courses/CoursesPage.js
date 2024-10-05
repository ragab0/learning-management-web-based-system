import React from "react";
import "./CoursesPage.css";
import CoursesList from "./Components/CoursesList/CoursesList";

export default function CoursesPage() {
  return (
    <div className="courses-dash-page">
      <h2>Courses list...</h2>
      <CoursesList />
    </div>
  );
}
