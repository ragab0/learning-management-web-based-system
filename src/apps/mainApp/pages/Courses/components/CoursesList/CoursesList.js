import React from "react";
import "./CoursesList.css";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import { useSelector } from "react-redux";
import NoContent from "../../../../../../components/NoContent/NoContent";

export default function CoursesList() {
  const {
    apiData: { results },
    isInitialized,
    loading,
  } = useSelector((state) => state.courses);

  if (isInitialized && !results?.length) {
    return (
      <div style={{ marginBlock: "100px 200px" }}>
        <NoContent />
      </div>
    );
  }

  return (
    <div className="row">
      {isInitialized && !loading
        ? results?.map((course, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={i}>
            <CourseOvervewCard course={course} isLoading={loading} />
          </div>
        ))
        : [...Array(10)].map((course, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={i}>
            <CourseOvervewCard skeleton={true} />
          </div>
        ))}
    </div>
  );
}
