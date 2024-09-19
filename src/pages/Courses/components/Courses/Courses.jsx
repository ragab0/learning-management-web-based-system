import React from "react";
import "./Courses.css";
import { courses } from "../../../../data/dummyData";
import courseImage from "../../../../assets/course1.png";

export default function Courses() {
  const renderCourses = () => {
    return courses.map((course, i) => (
      <div className="col-lg-4 col-md-6 mb-4" key={i}>
        <div className="box d-flex flex-column align-items-start p-3 pb-0">
          <div className="text-start mb-3 w-100">
            <img
              src={course.imgSrc ? course.imgSrc : courseImage}
              alt={course.title}
              className="img-fluid"
            />
          </div>
          <div className="text-start">
            <p className="text-dark">{course.title}</p>
            <h6>by {course.instructorName}</h6>
          </div>
          <div className="rate d-flex flex-wrap">
            {[...Array(Math.round(course.rating || 0))].map((_, i) => (
              <i className="fa-solid fa-star" key={i}></i>
            ))}
            <h6 className="mb-0">({course.ratingCount || 0} Ratings)</h6>
          </div>
          <div className="desc">
            <h6>
              {course.totalHours || "N/A"} Total Hours.{" "}
              {course.lecturesCount || "N/A"} Lectures. {course.level || "N/A"}
            </h6>
          </div>
          <div className="price">
            <p>
              {course.priceCurrency || "$"}
              {course.price || "N/A"}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">{renderCourses()}</div>
    </div>
  );
}
