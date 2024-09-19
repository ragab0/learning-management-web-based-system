import React from "react";
import "./MentorPage.css";
import MentorMainContent from "./Components/MentorMainContent/MentorMainContent";
import MentorAside from "./Components/MentorAside/MentorAside";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";

export default function MentorPage() {
  return (
    <div className="mentor-page">
      <main className="mentor-page-main">
        <MentorMainContent />
        <MentorAside />
      </main>
      <LineOfCourses title={`More Courses by ${"Ronald"}`} />
      <LearnerReviews />
    </div>
  );
}
