import React, { useState } from "react";
import "./Courses.css";
import { courses } from "../../../../../../data/dummyData";
import courseImage from "../../../../../../assets/course1.png";

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(courses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCourses = () => {
    return currentCourses.map((course, i) => (
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
      <nav className="d-flex justify-content-center my-5">
        <ul className="pagination pagination-sm">
          {pageNumbers.map((num) => (
            <li
              key={num}
              onClick={() => handlePageChange(num)}
              className={`page-item ${currentPage === num ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
