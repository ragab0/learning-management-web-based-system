import React from "react";
import "./LineOfCourses.css";
import { Link } from "react-router-dom";
import { courses } from "../../../../data/dummyData";
import CourseOvervewCard from "../CourseOvervewCard/CourseOvervewCard";

export default function LineOfCourses({ title }) {
  const renderCourses = () => {
    return courses.slice(0, 4).map((course, index) => (
      <div
        key={index}
        className="course-card-wrapper col-lg-3 col-md-6 col-sm-6 mb-4"
      >
        <CourseOvervewCard course={course} courseId={index} />
      </div>
    ));
  };

  return (
    <section className="line-of-courses py-4">
      <div className="container">
        <header className="d-flex justify-content-between align-items-center mb-3">
          <h2>{title}</h2>
          <Link to="#" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row">{renderCourses()}</div>
      </div>
    </section>
  );
}
