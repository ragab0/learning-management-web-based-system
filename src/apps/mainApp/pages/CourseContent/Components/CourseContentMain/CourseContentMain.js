import React, { useEffect } from "react";
import "./CourseContentMain.css";
import Tabs from "../../../../components/Tabs/Tabs";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import MarkDownReadOnly from "../../../../../dashboardApp/components/MarkDown/MarkDownReadOnly";
import Loader from "../../../../../../components/Loader/Loader";
import NoContent from "../../../../../../components/NoContent/NoContent";
import CourseContentAside from "../CourseContentAside/CourseContentAside";
import ReactPlayer from "react-player";
import CommentsSection from "../CommentsSection/CommentsSection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { parseYouTubeUrl } from "../../../../../../utils/parseYTUrl";
import { setCurrentLesson } from "../../../../../../store/slices/studentSlice";

const tabs = [
  {
    name: "details",
  },
  {
    name: "reviews",
    Comp: LearnerReviews,
  },
  {
    name: "comments",
    Comp: CommentsSection,
  },
  {
    name: "content",
    Comp: () => (
      <div>
        <CourseContentAside />
        <div className="aside-alternative d-none">
          <NoContent />
        </div>
      </div>
    ),
  },
];

export default function CourseContentMain() {
  const dispatch = useDispatch();
  const { hash } = useLocation();
  const {
    apiData: { result = {} },
    loading,
    currentLesson: { url: lessonSrc },
  } = useSelector((state) => state.student.currentStudyCourse);
  const { description, mentor = {}, modules = [] } = result._id || {};

  useEffect(
    function () {
      if (!lessonSrc) {
        dispatch(
          setCurrentLesson({
            url: modules[0]?.lessons?.[0]?.srcVideo,
            id: modules[0]?.lessons?.[0]?._id,
          })
        );
      }
    },
    [dispatch, modules, lessonSrc]
  );

  const src = lessonSrc && parseYouTubeUrl(lessonSrc);

  return (
    <div className="course-content-main">
      <header className="course-content-main-header flex">
        <div className="video-wrapper">
          <ReactPlayer
            url={src}
            controls={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </header>
      <div className="course-content-main-body container-fluid">
        <Tabs tabs={tabs.map((e) => e.name)} />
        <div className="tabs-content mx-auto" style={{ maxWidth: "700px" }}>
          <div className="tab-content">
            {loading ? (
              <Loader />
            ) : !hash || hash.slice(1) === tabs[0].name ? (
              <div className="details">
                <MarkDownReadOnly source={description} />
                <div className=" mt-5">
                  <InstructorTab mentor={mentor} fullDescription={true} />
                </div>
              </div>
            ) : (
              tabs
                .slice(1)
                .map(
                  ({ name, Comp }, i) =>
                    name === hash?.slice(1) && <Comp key={i} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
