import React from "react";
import "./FeaturedCourses.css";
import courseImage from "../../../../assets/course1.png";
import { courses } from "../../../../data/dummyData";

export default function FeaturedCourses() {
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
            {[...Array(5)].map((star, i) => (
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
        <div className="col-12 mb-3">
          <h2>Featured Courses</h2>
        </div>
        {renderCourses()}
      </div>
    </div>
  );
}
