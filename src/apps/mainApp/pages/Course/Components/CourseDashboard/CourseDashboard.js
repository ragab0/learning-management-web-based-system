import React from "react";
import "./CourseDashboard.css";
import { useSelector } from "react-redux";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import Chapter from "../Chapter/Chapter";
import Tabs from "../../../../components/Tabs/Tabs";
import Skeleton from "react-loading-skeleton";
import MarkDownReadOnly from "../../../../../dashboardApp/components/MarkDown/MarkDownReadOnly";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";

const tabs = ["Description", "Instructor", "Syllabus", "Reviews"];

export default function CourseDashboard() {
  const {
    loading,
    apiData: { result = {} },
  } = useSelector((state) => state.courses.currentCourse);

  const { description, mentor = {}, modules = [] } = result;

  return (
    <div className="course-dashboard">
      <Tabs tabs={tabs} />
      <div className="tabs-content">
        {/* tab 01 */}
        <div className="course-desc-tab" id={tabs[0].toLocaleLowerCase()}>
          <div className="course_desc">{}</div>
          <div className="certification">
            {loading ? (
              <TabSkel />
            ) : (
              <ScrollAnimatedSection isFadeup={true}>
                <MarkDownReadOnly source={description} />
              </ScrollAnimatedSection>
            )}
          </div>
        </div>
        {/* tab 02 */}
        <div className="course-inst-tab" id={tabs[1].toLocaleLowerCase()}>
          {loading ? (
            <TabSkel />
          ) : (
            <ScrollAnimatedSection isFadeup={true}>
              <InstructorTab mentor={mentor} />
            </ScrollAnimatedSection>
          )}
        </div>
        <div className="course-syllabus-tab" id={tabs[2].toLocaleLowerCase()}>
          {loading ? (
            <TabSkel />
          ) : (
            <>
              <h4 className="text-dark fw-bold mb-4">Syllabus</h4>
              <div className="chapters">
                {loading ? (
                  <TabSkel />
                ) : (
                  <ScrollAnimatedSection isFadeup={true}>
                    {modules.map((chapter, i) => (
                      <Chapter key={i} chapter={chapter} />
                    ))}
                  </ScrollAnimatedSection>
                )}
              </div>
            </>
          )}
        </div>

        <div
          id={tabs[3].toLocaleLowerCase()}
          className="course-learner-reviews-tab"
        >
          {loading ? (
            <TabSkel />
          ) : (
            <ScrollAnimatedSection isFadeup={true}>
              <LearnerReviews />
            </ScrollAnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}

function TabSkel() {
  return (
    <>
      <Skeleton height={30} className=" w-50" />
      <Skeleton height={200} />
    </>
  );
}
