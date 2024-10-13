import React from "react";
import "./CourseContentAside.css";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import LayoutCheckboxes from "../../../../layouts/Checkboxes/Checkboxes";
import { Link } from "react-router-dom";

const courseSections = [
  "Introduction to UX Design",
  "Advanced UX Strategies",
  "UX Design Principles",
  "User Research Techniques",
  "Prototyping and Testing",
];

const courseContent = [
  { title: "What is User Experience Design?", duration: "4min" },
  { title: "Principles of UX Design", duration: "5min" },
  { title: "User Research Methods", duration: "6min" },
  { title: "Creating Prototypes", duration: "7min" },
  { title: "Testing and Feedback", duration: "8min" },
];

export default function CourseContentAside() {
  return (
    <aside className="aside container p-2 pt-5">
      <div className="aside-content p-0">
        <h3 className="m-3 mt-4">Course Content</h3>
        {courseSections.map((section, i) => (
          <LayoutMenuToggler title={section} key={i}>
            <LayoutCheckboxes showOrder={true}>
              {courseContent.map((content, j) => (
                <div
                  className="d-flex justify-content-between align-items-start gap-2 w-100"
                  key={j}
                >
                  <Link to={`${j}`} className="course-title mb-0">
                    {/* {j + 1}. */}
                    {j + 1}. {content.title}
                  </Link>
                  <div className=" d-flex align-items-center gap-2">
                    <i className="fa-solid fa-video course-icon"></i>
                    <span>{content.duration}</span>
                  </div>
                </div>
              ))}
            </LayoutCheckboxes>
          </LayoutMenuToggler>
        ))}
      </div>
    </aside>
  );
}

<div className="coursecontent"></div>;
