import React, { useEffect } from "react";
import "./CourseContentPage.css";
import CourseContentAside from "./Components/CourseContentAside/CourseContentAside";
import CourseContentMain from "./Components/CourseContentMain/CourseContentMain";
import CourseContentNav from "./Components/CourseContentNav/CourseContentNav";
import NoContent from "../../../../components/NoContent/NoContent";
import Loader from "../../../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaughtCourseContent } from "../../../../store/slices/studentSlice";
import { useParams } from "react-router-dom";

export default function CourseContentPage() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const {
    apiData: { result = {} },
    loading,
    isInitialized,
    error,
  } = useSelector((state) => state.student.currentStudyCourse);
  const { title } = result._id || {};

  useEffect(
    function () {
      dispatch(fetchBaughtCourseContent({ id: courseId }));
    },
    [dispatch, courseId]
  );

  if (!isInitialized || loading) {
    return <Loader />;
  }

  if (isInitialized && error) {
    return (
      <NoContent>
        <p className="text-dark font-monospace text-center">{error}</p>
      </NoContent>
    );
  }

  return (
    <div className="course-content-page">
      <CourseContentNav title={title} />
      <div className="content-aside-layout gap-0">
        <CourseContentMain />
        <CourseContentAside />
      </div>
    </div>
  );
}
