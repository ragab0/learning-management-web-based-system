import React, { useState } from "react";
import "./CourseContent.css";
import courseVideo from "../../assets/noxe.mp4";

export default function CourseContent() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleChaptersMenu = (sectionIndex) => {
    setVisibleSection(visibleSection === sectionIndex ? null : sectionIndex);
  };

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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Introduction to User Experience Design</h1>
        </div>
        <div className="col-lg-9 col-md-9 mb-3">
          <div className="video-section">
            <video src={courseVideo} className="w-100" controls />
          </div>
          <div className="btns d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-outline-secondary pe-3 ps-3">
              Details
            </button>
            <button className="btn btn-outline-secondary pe-3 ps-3">
              Instructor
            </button>
            <button className="btn btn-outline-secondary pe-3 ps-3">
              Courses
            </button>
            <button className="btn btn-outline-secondary pe-3 ps-3">
              Reviews
            </button>
          </div>
          <hr />
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
          <div className="key-learning mt-5">
            <h3>Key Learning Objectives</h3>
            <p>
              <li>
                Gain a clear understanding of what User Experience (UX) Design
                entails and its importance in today's digital world.
              </li>
              <li>
                Explore the fundamental principles of user-centered design and
                how to apply them to create intuitive and user-friendly
                interfaces.
              </li>
              <li>
                Learn about the various elements that contribute to a positive
                user experience, including information architecture, interaction
                design, and visual design.
              </li>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 course">
          <div className="d-flex flex-column flex-wrap mt-2 p-2 pb-3">
            <h3>Course Completion</h3>
          </div>
          {courseSections.map((section, index) => (
            <div className="w-100 p-2" key={index}>
              <div
                onClick={() => toggleChaptersMenu(index)}
                className="d-flex align-items-center cursor-pointer"
                role="button"
                aria-expanded={visibleSection === index}
              >
                <i
                  className={`p-2 fa-solid ${
                    visibleSection === index ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
                <h5 className="fw-bold text-dark">{section}</h5>
              </div>
              <hr />
              {visibleSection === index && (
                <div className="coursecontent">
                  {courseContent.map((content, contentIndex) => (
                    <div
                      className="d-flex justify-content-between align-items-center w-100 mb-2 content"
                      key={contentIndex}
                    >
                      <input type="checkbox" className="checkbox" />
                      <p className="course-title m-2">{`${contentIndex + 1}. ${
                        content.title
                      }`}</p>
                      <i className="fa-solid fa-video course-icon me-2"></i>
                      <p>{content.duration}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
