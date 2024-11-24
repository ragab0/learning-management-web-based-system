import React from "react";
import "./CoursesList.css";
import { useSelector } from "react-redux";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import NoContent from "../../../../../../components/NoContent/NoContent";
import ScrollAnimations from "../../../../components/ScrollAnimations/ScrollAnimations";

export default function CoursesList() {
  const {
    apiData: { results = [] },
    isInitialized,
    loading,
    error,
  } = useSelector((state) => state.courses.publicCourses);

  if (!isInitialized || loading) {
    return (
      <div className="row">
        {[...Array(9)].map((course, i) => (
          <ScrollAnimations
            delay={0.05 * i}
            animationName="cardSprintToDown"
            className="col-md-6 mb-4"
            key={i}
          >
            <CourseOvervewCard skeleton={true} />
          </ScrollAnimations>
        ))}
      </div>
    );
  }

  if (isInitialized && (!results.length || error)) {
    return (
      <div style={{ marginBlock: "150px 250px" }}>
        <NoContent />
      </div>
    );
  }

  return (
    <div className="row">
      {results.map((course, i) => (
        <ScrollAnimations
          delay={0.05 * i}
          animationName="cardSprintToDown"
          className="col-md-6 mb-4"
          key={i}
        >
          <CourseOvervewCard course={course} isLoading={loading} />
        </ScrollAnimations>
      ))}
    </div>
  );
}
