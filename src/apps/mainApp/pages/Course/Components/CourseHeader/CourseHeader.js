import React from "react";
import { Link } from "react-router-dom";
import myImage from "../../../../../../assets/customersImgs/cust5Heigh.png";
import "./CourseHeader.css";

export default function CourseHeader() {
  return (
    <div className="course-header content">
      <div className="links mt-4">
        <Link className=" mx-3 home" to="/">
          Home
        </Link>
        <span>&gt;</span>
        <Link className=" mx-3 category" to="/courses">
          Categories
        </Link>
        <span>&gt;</span>
        <Link className=" mx-3 user" to={"#"}>
          Introduction to User Experience Design
        </Link>
      </div>
      <div className="section1 mt-5 mb-2">
        <h1 className="">Introduction to User Experience Design</h1>
        <p className=" mt-3">
          This course is meticulously crafted to provide you with a foundational
          understanding of the principles, methodologies, and tools that drive
          exceptional user experiences in the digital landscape.
        </p>
        <div className="rating mb-3">
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
        <div className="user_details">
          <img src={myImage} alt="user" />
          <span className="userName">
            Created by <span className="user_name">Ronald Richards</span>
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
