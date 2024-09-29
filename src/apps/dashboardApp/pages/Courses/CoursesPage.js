import React from "react";
import "./CoursesPage.css";
import CoursesList from "./Components/CoursesList/CoursesList";

export default function CoursesPage() {
  return (
    <div className="courses-page">
      CoursesPage
      <h1>Courses list...</h1>
      <CoursesList />
    </div>
  );
}
