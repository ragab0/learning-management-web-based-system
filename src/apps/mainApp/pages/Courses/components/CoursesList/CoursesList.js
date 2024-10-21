import React from "react";
import "./CoursesList.css";
import { useSelector } from "react-redux";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import NoContent from "../../../../../../components/NoContent/NoContent";

export default function CoursesList() {
  const {
    apiData: { results },
    isInitialized,
    loading,
  } = useSelector((state) => state.courses.publicCourses);

  if (!isInitialized || loading) {
    return (
      <div className="row">
        {[...Array(9)].map((course, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <CourseOvervewCard skeleton={true} />
          </div>
        ))}
      </div>
    );
  }

  if (isInitialized && !results.length) {
    return (
      <div style={{ marginBlock: "150px 250px" }}>
        <NoContent />
      </div>
    );
  }

  return (
    <div className="row">
      {results.map((course, i) => (
        <div className="col-md-6 mb-4" key={i}>
          <CourseOvervewCard course={course} isLoading={loading} />
        </div>
      ))}
    </div>
  );
}
