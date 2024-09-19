import React from "react";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CourseAside from "./Components/CourseAside/CourseAside";
import CourseDashboard from "./Components/CourseDashboard/CourseDashboard";
import CourseHeader from "./Components/CourseHeader/CourseHeader";
import "./CoursePage.css";

export default function CoursePage() {
  return (
    <div className="course-page">
      <div className="container">
        <main className="course-page-main">
          <CourseHeader />
          <CourseDashboard />
        </main>
        <CourseAside />
      </div>
      <CustomerComments />
      <LineOfCourses title="More Courses Like This" />
    </div>
  );
}
