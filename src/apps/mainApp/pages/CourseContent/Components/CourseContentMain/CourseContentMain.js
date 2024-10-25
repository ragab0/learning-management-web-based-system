import React from "react";
import "./CourseContentMain.css";
import Tabs from "../../../../components/Tabs/Tabs";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../../../components/LineOfCourses/LineOfCourses";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";
import { useSelector } from "react-redux";
import MarkDownReadOnly from "../../../../../dashboardApp/components/MarkDown/MarkDownReadOnly";

const tabs = ["Details", "Instructor", "Courses", "Reviews"];

export default function CourseContentMain() {
  const {
    apiData: { result = {} },
    loading,
  } = useSelector((state) => state.student.currentStudyCourse);
  const { description, mentor } = result._id || {};

  return (
    <div className="course-content-main">
      <header className="flex">
        <video src={"courseVideo"} className="w-100" controls />
      </header>
      <Tabs tabs={tabs} />
      <div className="tabs-content">
        <div className="tab-content" id={tabs[0].toLocaleLowerCase()}>
          {loading ? (
            <TabSkel />
          ) : (
            <ScrollAnimatedSection isFadeup={true}>
              <MarkDownReadOnly source={description} />
            </ScrollAnimatedSection>
          )}
        </div>
        <div className="tab-content" id={tabs[1].toLocaleLowerCase()}>
          <InstructorTab mentor={mentor} />
        </div>
        <ScrollAnimatedSection isFadeup={true}>
          <div className="tab-content" id={tabs[2].toLocaleLowerCase()}>
            <LineOfCourses title={`More Courses`} />
          </div>
        </ScrollAnimatedSection>
        <ScrollAnimatedSection isFadeup={true}>
          <div className="tab-content" id={tabs[3].toLocaleLowerCase()}>
            <LearnerReviews />
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
}

function TabSkel() {}
