import React, { useEffect } from "react";
import "./TabMyCourses.css";
import { myCourses } from "../../../../../../data/dummyData";
import FilterOptions from "../FilterOptions/FilterOptions";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrolledCourses } from "../../../../../../store/slices/studentSlice";
import Loader from "../../../../../../components/Loader/Loader";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";

export default function TabMyCourses() {
  const dispatch = useDispatch();
  const {
    apiData: { results = [] },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.enrolledCourses);

  useEffect(
    function () {
      dispatch(fetchEnrolledCourses());
    },
    [dispatch]
  );

  return (
    <div className="tab-my-courses">
      <header className="header col-12">
        <h2>
          Courses<span className="ms-2 fs-5">({myCourses.length})</span>
        </h2>
        <FilterOptions />
      </header>
      <div className="row">
        {isInitialized && !loading
          ? results?.map((course, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <CourseOvervewCard course={course} isEnrolledObj={{}} />
              </div>
            ))
          : [...Array(6)].map((course, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <CourseOvervewCard skeleton={true} />
              </div>
            ))}
        <PaginationMain />
      </div>
    </div>
  );
}
