import React from "react";
import { Link } from "react-router-dom";
import myImage from "../../../../../../assets/customersImgs/cust5Heigh.png";
import ArrowChevron from "../../../../../../assets/svgsComps/ChevronRightSmall";
import "./CourseHeader.css";

export default function CourseHeader() {
  return (
    <div className="course-header content">
      <div className="links">
        <Link
          className="btn btn-link text-decoration-none ms-0 ps-0 text-black"
          to="/"
        >
          Home
        </Link>
        <ArrowChevron />
        <Link
          className="btn btn-link text-decoration-none ms-0 text-black"
          to="/courses"
        >
          Categories
        </Link>
        <ArrowChevron />
        <Link className="btn btn-link text-decoration-none ms-0 user" to={"#"}>
          Introduction to User Experience Design
        </Link>
      </div>
      <div className="section1">
        <h1>Introduction to User Experience Design</h1>
        <p className="my-3">
          This course is meticulously crafted to provide you with a foundational
          understanding of the principles, methodologies, and tools that drive
          exceptional user experiences in the digital landscape.
        </p>
        <div className="rating my-3">
          <span className=" rate pe-2">4.6</span>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <i className="star fa-solid fa-star"></i>
          <span className="no_rate px-2">(651651 rating)</span>
          <span className="desc">
            | 22 Total Hours. 155 Lectures. All levels
          </span>
        </div>
        <div className="my-3 user_details">
          <Link to="/mentors/0">
            <img src={myImage} alt="user" />
          </Link>
          <span className="userName">
            Created by
            <Link to="/mentors/0" className="ms-1 user_name text-capitalize">
              Ronald Richards
            </Link>
          </span>
        </div>
        <div className="lang mt-3">
          <i class="globe fa-solid fa-globe fs-5"></i>
          <span className="language ms-2">
            English, Spanish, Italian, German
          </span>
        </div>
      </div>
    </div>
  );
}
