import React, { useEffect } from "react";
import "./LineOfCourses.css";
import { Link } from "react-router-dom";
import CourseOvervewCard from "../CourseOvervewCard/CourseOvervewCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCourses } from "../../../../store/slices/topSlice";
import NoContent from "../../../../components/NoContent/NoContent";
import ScrollAnimations from "../ScrollAnimations/ScrollAnimations";

export default function LineOfCourses({ title, mt = false }) {
  const {
    apiData: { results = [] },
    error,
    loading,
    isInitialized,
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
      <ScrollAnimations
        animationName="cardSprintToDown"
        delay={0.1 * index}
        key={index}
        className="course-card-wrapper col-sm-12 gy-4"
      >
        <CourseOvervewCard course={course} isTwoSides={true} />
      </ScrollAnimations>
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
        <div className="row justify-content-center">
          {!isInitialized || loading ? (
            <Skel />
          ) : error ? (
            <NoContent style={{ marginBlock: mt ? "100px 0" : "100px" }} />
          ) : (
            renderCourses()
          )}
        </div>
      </div>
    </section>
  );
}

function Skel() {
  return (
    <ScrollAnimations
      animationName="scaleIn"
      className="course-card-wrapper col-sm-12 gy-4"
    >
      <CourseOvervewCard isTwoSides={true} skeleton={true} />
    </ScrollAnimations>
  );
}
