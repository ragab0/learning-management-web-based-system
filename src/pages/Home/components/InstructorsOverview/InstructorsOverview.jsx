import React from "react";
import inst1 from "../../../../assets/mentorsImgs/mentor10.png";
import inst2 from "../../../../assets/mentorsImgs/mentor11.png";
import "./InstructorsOverview.css";

export default function InstructorsOverview() {
  return (
    <div>
      <header className="d-flex justify-content-between align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="ps-5 ms-5">
            <img src={inst1} alt="" />
          </div>
          <div className="header-content">
            <h2>Become an Instructor</h2>
            <p>
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </p>
            <button className="btn btn-dark p-3 ps-4 pe-4">
              Start Your Instructor Journey
              <i className="fa-solid fa-arrow-right ps-2"></i>
            </button>
          </div>
        </div>
      </header>
      <header className="d-flex justify-content-between align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="header-content">
            <h2>Transform your life through education</h2>
            <p>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <button className="btn btn-dark p-3 ps-4 pe-4">
              Checkout Courses <i className="fa-solid fa-arrow-right ps-2"></i>
            </button>
          </div>
          <div className="pe-5 me-3">
            <img src={inst2} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}
