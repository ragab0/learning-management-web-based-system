import React from "react";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import "./CourseDashboard.css";

export default function CourseDashboard() {
  return (
    <div className="section2 mt-5">
      <div className="pe-3 mb-4">
        <button className=" mx-4 px-4 py-2 border-0">Description</button>
        <button className=" mx-4 px-4 py-2">Instructor</button>
        <button className=" mx-4 px-4 py-2">Syllabus</button>
        <button className=" mx-4 px-4 py-2">Reviews</button>
      </div>
      <div className="course_desc">
        <h4 className=" text-dark fw-bold">Course Description</h4>
        <p className=" mb-5">
          This interactive e-learning course will introduce you to User
          Experience (UX) design, the art of creating products and services that
          are intuitive, enjoyable, and user-friendly. Gain a solid foundation
          in UX principles and learn to apply them in real-world scenarios
          through engaging modules and interactive exercises.{" "}
        </p>
      </div>
      <div className="certification">
        <h4 className=" text-dark fw-bold">Certification</h4>
        <p>
          At Byway, we understand the significance of formal recognition for
          your hard work and dedication to continuous learning. Upon successful
          completion of our courses, you will earn a prestigious certification
          that not only validates your expertise but also opens doors to new
          opportunities in your chosen field.
        </p>
      </div>
      <InstructorTab />
      <div className="syllabus mb-5">
        <h4 className=" text-dark fw-bold">Syllabus</h4>
        <div className="ux_design mt-5">
          <select className="">
            <option className=" fw-bolder">Introduction to UX Design</option>
          </select>
          <div className="ux_details">
            <span className=" me-4 fw-medium">5 Lessons</span>
            <span className="fw-medium">1 hour</span>
          </div>
        </div>
        <div className="ux_design mt-5">
          <select className="">
            <option className=" fw-bolder">
              Basics of User-Centered Design
            </option>
          </select>
          <div className="ux_details">
            <span className=" me-4 fw-medium">5 Lessons</span>
            <span className="fw-medium">1 hour</span>
          </div>
        </div>
        <div className="ux_design mt-5">
          <select className="">
            <option className=" fw-bolder">Elements of User Experience</option>
          </select>
          <div className="ux_details">
            <span className=" me-4 fw-medium">5 Lessons</span>
            <span className="fw-medium">1 hour</span>
          </div>
        </div>
        <div className="ux_design mt-5">
          <select className="">
            <option className=" fw-bolder">Visual Design Principles</option>
          </select>
          <div className="ux_details">
            <span className=" me-4 fw-medium">5 Lessons</span>
            <span className="fw-medium">1 hour</span>
          </div>
        </div>
      </div>
      <LearnerReviews />
    </div>
  );
}
