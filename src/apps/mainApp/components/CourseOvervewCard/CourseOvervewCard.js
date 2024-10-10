import React from "react";
import "./CourseOvervewCard.css";
import courseImage from "../../../../assets/course1.png";
import { Link } from "react-router-dom";

export default function CourseOvervewCard({ course }) {
  const { _id } = course;

  return (
    <Link to={`/courses/${_id}`} className="course-overvew-card">
      <figure className="box d-flex flex-column align-items-start p-3 mb-0">
        <div className="text-start w-100" style={{ height: "150px" }}>
          <img
            src={course.imgSrc ? course.imgSrc : courseImage}
            alt={course.name}
          />
        </div>
        <fieldset className="pt-3">
          <div className=" text-capitalize">
            <h5 className="text-dark">{course.title}</h5>
            <h6>by {course.instructorName}</h6>
          </div>
          <div className="rate d-flex flex-wrap align-items-center">
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
            <p className="mb-0">
              {course.priceCurrency}
              {course.price}
            </p>
          </div>
        </fieldset>
      </figure>
    </Link>
  );
}
