import React from "react";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import "./HomePage.css";
import TopCategories from "./components/TopCategories/TopCategories";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import InstructorsOverview from "./components/InstructorsOverview/InstructorsOverview";
import LineOfInstructors from "../../components/LineOfMentors/LineOfInstructors";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Statistics />
      <TopCategories />
      <LineOfCourses title="Top Courses" />
      <LineOfInstructors title="Top Instructors" />
      <CustomerComments />
      <InstructorsOverview />
    </div>
  );
}
