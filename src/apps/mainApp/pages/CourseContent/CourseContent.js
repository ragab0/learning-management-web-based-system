import React, { useEffect } from "react";
import "./CourseContent.css";
import CourseContentAside from "./Components/CourseContentAside/CourseContentAside";
import CourseContentMain from "./Components/CourseContentMain/CourseContentMain";
import CourseContentNav from "./Components/CourseContentNav/CourseContentNav";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaughtCourseContent } from "../../../../store/slices/studentSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import NoContent from "../../../../components/NoContent/NoContent";
import Loader from "../../../../components/Loader/Loader";

export default function CourseContent() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const {
    apiData: { result = {} },
    loading,
    isInitialized,
    error,
  } = useSelector((state) => state.student.currentStudyCourse);

  useEffect(
    function () {
      dispatch(fetchBaughtCourseContent({ id: courseId }));
    },
    [dispatch, courseId]
  );

  if (!isInitialized || loading) {
    return <Loader color="#ffff" />;
  }

  if (isInitialized && error) {
    toast.error(error);
    return <NoContent />;
  }

  return (
    <div className="course-content-page">
      <CourseContentNav title={"Introduction to User Experience Design"} />
      <div className="content-aside-layout gap-0">
        <CourseContentMain />
        <CourseContentAside />
      </div>
    </div>
  );
}
