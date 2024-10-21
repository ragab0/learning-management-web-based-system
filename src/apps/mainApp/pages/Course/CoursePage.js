import React, { useEffect } from "react";
import "./CoursePage.css";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CourseAside from "./Components/CourseAside/CourseAside";
import CourseDashboard from "./Components/CourseDashboard/CourseDashboard";
import CourseHeader from "./Components/CourseHeader/CourseHeader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../../store/slices/coursesSlice";
import NoContent from "../../../../components/NoContent/NoContent";
import ScrollAnimatedSection from "../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";

export default function CoursePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    isInitialized,
    loading,
    apiData: { result },
  } = useSelector((state) => state.courses.currentCourse);

  useEffect(
    function () {
      dispatch(getCourse({ id }));
    },
    [dispatch, id]
  );

  if (isInitialized && !result) {
    return <NoContent />;
  }

  return (
    <div className="course-page">
      <div className="container content-aside-layout">
        <main className="course-page-main">
          <CourseHeader />
          <CourseDashboard />
        </main>
        <CourseAside />
      </div>
      <CustomerComments />
      <LineOfCourses title="More Courses Like This" />
    </div>
  );
}
