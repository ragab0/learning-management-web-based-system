import React from "react";
import Header from "./components/Header/Header";
import Statistics from './components/Statistics/Statistics';
import "./HomePage.css";
import TopCategories from "./components/TopCategories/TopCategories";
import TopCourses from "./components/TopCourses/TopCourses";
import TopInstructors from "./components/TopInstructors/TopInstructors";
import CustomerComments from "./components/CustomerComments/CustomerComments";
import InstructorsOverview from "./components/InstructorsOverview/InstructorsOverview";



export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Statistics />
      <TopCategories />
      <TopCourses />
      <TopInstructors />
      <CustomerComments />
      <InstructorsOverview />
    </div>
  );
}
