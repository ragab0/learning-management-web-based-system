import React from "react";
import myImage from "../../../../assets/customersImgs/cust5Heigh.png";
import "./InstructorTab.css";
import { Link } from "react-router-dom";

export default function InstructorTab() {
  return (
    <div className="instructor-tab">
      <h4 className=" text-dark fw-bold">Instructor</h4>
      <Link
        to="/mentors/0"
        className="d-block mt-3 mb-1 fw-bolder text-primary fs-5"
      >
        Ronald Richards
      </Link>
      <h5 className=" fs-6">UI/UX Designer</h5>
      <div className="ins_info">
        <Link to="/mentors/0">
          <img src={myImage} alt="instructor" />
        </Link>
        <div className="ins_details ms-4 mt-3">
          <div className="review">
            <i className=" pe-2 fa-brands fa-algolia"></i>
            <span>40,445 Reviews</span>
          </div>
          <div className="student">
            <i className=" pe-2 fa-solid fa-graduation-cap"></i>
            <span>500 Students</span>
          </div>
          <div className="courses">
            <i className=" ps-1 pe-2 fa-solid fa-play"></i>
            <span>15 Courses</span>
          </div>
        </div>
      </div>
      <p className=" mt-4">
        With over a decade of industry experience, Ronald brings a wealth of
        practical knowledge to the classroom. He has played a pivotal role in
        designing user-centric interfaces for renowned tech companies, ensuring
        seamless and engaging user experiences.
      </p>
    </div>
  );
}
