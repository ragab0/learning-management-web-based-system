import React from "react";
import "./LessonsPage.css";
import LessonsAside from "./Components/LessonsAside/LessonsAside";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import LessonsMainContent from "./Components/LessonsMainContent/LessonsMainContent";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";

export default function LessonsPage() {
  return (
    <div className="lessons-page">
      <main className="lessons-page-main">
        <LessonsMainContent />
        <LessonsAside />
      </main>
      <LineOfCourses title={`More Courses by ${"Ronald"}`} />
      <LearnerReviews />
    </div>
  );
}
