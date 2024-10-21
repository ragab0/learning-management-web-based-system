import React, { useEffect } from "react";
import "./LineOfCourses.css";
import { Link } from "react-router-dom";
import CourseOvervewCard from "../CourseOvervewCard/CourseOvervewCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCourses } from "../../../../store/slices/topSlice";
import ScrollAnimatedSection from "../ScrollAnimatedFadeup/ScrollAnimatedFadeup";

export default function LineOfCourses({ title }) {
  const {
    apiData: { results = [] },
  } = useSelector((state) => state.top.topCourses);

  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchTopCourses());
    },
    [dispatch]
  );

  const renderCourses = () => {
    return results.map((course, index) => (
      <div key={index} className="course-card-wrapper col-sm-12 gy-4">
        <ScrollAnimatedSection isFadeup={true}>
          <CourseOvervewCard course={course} isTwoSides={true} />
        </ScrollAnimatedSection>
      </div>
    ));
  };

  return (
    <section className="line-of-courses py-4">
      <div className="container">
        <header className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <Link to="/courses" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row justify-content-center">{renderCourses()}</div>
      </div>
    </section>
  );
}
