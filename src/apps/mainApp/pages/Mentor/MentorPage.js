import React from "react";
import "./MentorPage.css";
import MentorMainContent from "./Components/MentorMainContent/MentorMainContent";
import MentorAside from "./Components/MentorAside/MentorAside";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";

export default function MentorPage() {
  return (
    <div className="mentor-page">
      <div className="content-aside-layout container">
        <MentorMainContent />
        <MentorAside />
      </div>
      <LineOfCourses title={`More Courses by ${"Ronald"}`} />
      <div className="container">
        <LearnerReviews />
      </div>
    </div>
  );
}
