import React, { useEffect } from "react";
import "./CoursePage.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentorCourse } from "../../../../store/slices/mentorSlice";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import Skeleton from "react-loading-skeleton";

const tabs = [
  // { name: "commission", to: ".", end: true },
  { name: "customers", to: ".", end: true },
  { name: "reviews" },
  { name: "chapters" },
  { name: "promotion" },
  { name: "details" },
  { name: "settings" },
];

export default function CoursePage() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const {
    loading,
    isInitialized,
    apiData: { result },
  } = useSelector((state) => state.mentor.currentCourse);

  useEffect(
    function () {
      dispatch(fetchMentorCourse({ id: courseId }));
    },
    [dispatch, courseId]
  );
  if (!isInitialized || loading) {
    return (
      <div>
        <Skeleton width={400} height={30} />
        <Skeleton width={600} height={30} />
        {[...Array(15)].map((e, i) => (
          <Skeleton key={i} className="col-4" height={30}></Skeleton>
        ))}
      </div>
    );
  }

  return (
    <div className="course-dash-page p-3">
      <header className="course-page-header">
        <h2>{result?.title || "UnTitled Course.."}</h2>
        <Tabs tabs={tabs} />
      </header>
      <div className="course-page-body">
        <Outlet />
      </div>
    </div>
  );
}
