import React from "react";
import "./CourseContentAside.css";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import { Link } from "react-router-dom";
import LayoutCheckboxesCourse from "../../../../layouts/CheckboxesCourse/CheckboxesCourse";

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
    <aside className="aside container p-0 ">
      <div className="aside-content p-0">
        <h3 className="m-3 mt-4">Course Content</h3>
        {courseSections.map((section, i) => (
          <LayoutMenuToggler title={section} key={i}>
            <LayoutCheckboxesCourse showOrder={true}>
              {courseContent.map((content, j) => (
                <div className="w-100 d-grid align-items-start mb-1" key={j}>
                  <Link
                    to={`${j}`}
                    className="course-title mb-1"
                    style={{ lineHeight: "1.2" }}
                  >
                    {j + 1}.{content.title}
                  </Link>
                  <div className=" d-flex align-items-center gap-2">
                    <i
                      className="fa-solid fa-video course-icon"
                      style={{ opacity: 0.3 }}
                    ></i>
                    <span>{content.duration}</span>
                  </div>
                </div>
              ))}
            </LayoutCheckboxesCourse>
          </LayoutMenuToggler>
        ))}
      </div>
    </aside>
  );
}

<div className="coursecontent"></div>;
