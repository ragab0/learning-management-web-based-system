import React from "react";
import "./CourseContentMain.css";
import Tabs from "../../../../components/Tabs/Tabs";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";
import { useSelector } from "react-redux";
import MarkDownReadOnly from "../../../../../dashboardApp/components/MarkDown/MarkDownReadOnly";
import { useLocation } from "react-router-dom";
import Loader from "../../../../../../components/Loader/Loader";
import NoContent from "../../../../../../components/NoContent/NoContent";
import ReactPlayer from "react-player";
import CourseContentAside from "../CourseContentAside/CourseContentAside";

const tabs = [
  {
    name: "details",
  },
  {
    name: "reviews",
    Comp: LearnerReviews,
  },
  {
    name: "notes",
    Comp: NoContent,
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
  const { hash } = useLocation();
  const {
    apiData: { result = {} },
    loading,
  } = useSelector((state) => state.student.currentStudyCourse);
  const { description, mentor = {}, modules = [] } = result._id || {};
  const video = modules[0]?.lessons?.[0]?.srcVideo;

  return (
    <div className="course-content-main">
      <header className="course-content-main-header flex">
        <div className="video-wrapper">
          <ReactPlayer
            url={video}
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
                <ScrollAnimatedSection isFadeup={true}>
                  <MarkDownReadOnly source={description} />
                  <div className=" mt-5">
                    <InstructorTab mentor={mentor} fullDescription={true} />
                  </div>
                </ScrollAnimatedSection>
              </div>
            ) : (
              tabs.slice(1).map(
                ({ name, Comp }, i) =>
                  name === hash?.slice(1) && (
                    <ScrollAnimatedSection key={i} isFadeup={true}>
                      <Comp key={i} />
                    </ScrollAnimatedSection>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
