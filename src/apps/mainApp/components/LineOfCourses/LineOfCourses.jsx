import React from "react";
import { courses } from "../../../../data/dummyData";
import courseImage from "../../../../assets/course1.png";
import "./LineOfCourses.css";

export default function LineOfCourses({ title }) {
  const renderCourses = () => {
    return courses.slice(0, 4).map((course, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
        <div className="box d-flex flex-column align-items-start p-3 pb-0">
          <div className="text-start mb-3 w-100">
            <img
              src={course.imgSrc ? course.imgSrc : courseImage}
              alt={course.name}
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
            <h6 className="mb-0">({course.ratingCount} Ratings)</h6>
          </div>
          <div className="desc">
            <h6>
              {course.totalHours} Total Hours. {course.lecturesCount} Lectures.{" "}
              {course.level}
            </h6>
          </div>
          <div className="price">
            <p>
              {course.priceCurrency}
              {course.price}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex flex-wrap">
        <div className="col-6 mb-3">
          <h2>{title}</h2>
        </div>
        <div className="col-6 d-flex justify-content-end seeAll">
          <a href="#">See All</a>
        </div>
        {renderCourses()}
      </div>
    </div>
  );
}
