import React from "react";
import "./HomePage.css";
import Header from "./components/Header/Header";
// import Statistics from "./components/Statistics/Statistics";
// import TopCategories from "./components/TopCategories/TopCategories";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import About from "./components/About/About";
import LineOfInstructors from "../../components/LineOfInstructors/LineOfInstructors";
import ScrollAnimatedSection from "../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";
// import Parteners from "../../../../assets/parteners.png";
import InfoSection from "./components/InfoSection/InfoSection";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />

      {/* <ScrollAnimatedSection>
        <Statistics />
      </ScrollAnimatedSection> */}

      {/* <ScrollAnimatedSection isFadeup={true}>
        <TopCategories />
      </ScrollAnimatedSection> */}

      <InfoSection />

      <ScrollAnimatedSection isFadeup={true}>
        <LineOfCourses title="Top Courses" />
      </ScrollAnimatedSection>

      <LineOfInstructors title="Top Instructors" />

      <ScrollAnimatedSection isFadeup={true}>
        <CustomerComments />
      </ScrollAnimatedSection>

      <About />
    </div>
  );
}
