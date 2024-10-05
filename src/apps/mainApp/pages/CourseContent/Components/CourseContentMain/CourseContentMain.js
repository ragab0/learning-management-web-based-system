import React from "react";
import "./CourseContentMain.css";
import courseVideo from "../../../../../../assets/noxe.mp4";
import Tabs from "../../../../components/Tabs/Tabs";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../../../components/LineOfCourses/LineOfCourses";

const tabs = ["Details", "Instructor", "Courses", "Reviews"];

export default function CourseContentMain() {
  return (
    <div className="course-content-main">
      <header className="flex">
        <video src={"courseVideo"} className="w-100" controls />
      </header>
      <Tabs tabs={tabs} />
      <div className="tabs-content">
        <div className="tab-content" id={tabs[0].toLocaleLowerCase()}>
          <div className="overview mt-3">
            <h3>Course Overview</h3>
            <p>
              Embark on a transformative journey into the dynamic world of User
              Experience (UX) Design with our comprehensive course,
              "Introduction to User Experience Design." This course is
              meticulously crafted to provide you with a foundational
              understanding of the principles, methodologies, and tools that
              drive exceptional user experiences in the digital landscape.
            </p>
          </div>
          <div className="key-learning mt-4">
            <h3>Key Learning Objectives</h3>
            <ul>
              <li>
                <p>
                  Gain a clear understanding of what User Experience (UX) Design
                  entails and its importance in today's digital world.
                </p>
              </li>
              <li>
                <p>
                  Explore the fundamental principles of user-centered design and
                  how to apply them to create intuitive and user-friendly
                  interfaces.
                </p>
              </li>
              <li>
                <p>
                  Learn about the various elements that contribute to a positive
                  user experience, including information architecture,
                  interaction design, and visual design.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id={tabs[1].toLocaleLowerCase()}>
          <InstructorTab />
        </div>
        <div className="tab-content" id={tabs[2].toLocaleLowerCase()}>
          <LineOfCourses title={`More Courses`} />
        </div>
        <div className="tab-content" id={tabs[3].toLocaleLowerCase()}>
          <LearnerReviews />
        </div>
      </div>
    </div>
  );
}
