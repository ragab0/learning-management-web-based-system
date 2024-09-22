import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TabMyCourses.css";
import { myCourses } from "../../../../data/dummyData";
import courseImage from "../../../../assets/course1.png";

export default function TabMyCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = myCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(myCourses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCourses = () => {
    return currentCourses.map((course, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
        <Link>
          <div className="box d-flex flex-column align-items-start p-3 pb-0">
            <div className="text-start mb-3 w-100">
              <img
                src={course.imgSrc || courseImage}
                alt={course.name || "Course Image"}
                className="img-fluid"
              />
            </div>
            <div className="text-start">
              <p className="text-dark">{course.title || "Untitled Course"}</p>
              <h6>by {course.instructorName || "Unknown Instructor"}</h6>
            </div>
            <div
              className="progress w-100 mt-2 mb-2"
              style={{ height: "10px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${course.progress || 50}%` }}
                aria-valuenow={course.progress || 50}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="rate d-flex flex-wrap mt-2">
              {course.rating > 0 && (
                <>
                  {[...Array(Math.round(course.rating))].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                  <h6 className="mb-0 ms-2">
                    ({course.ratingCount || 0} Ratings)
                  </h6>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2>
            My Courses<span className="ms-2 fs-5">({myCourses.length})</span>
          </h2>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-between mt-4 mb-5">
            <div className="search position-relative">
              <input
                className="search-input border-opacity-50 p-2 ps-5 pe-4"
                placeholder="Search"
              />
              <i className="fa fa-search search-icon"></i>
            </div>
            <div className="sort d-flex align-items-center">
              <h6 className="text-dark p-2 pe-4 mb-0">Sort By</h6>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-light border-black p-2 ps-4 pe-4"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Sort courses by relevance"
                >
                  Relevance
                  <i className="fa fa-angle-down ps-2"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Relevance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popularity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rating
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filter ms-4">
                <button className="btn btn-light border-black p-2 ps-4 pe-4">
                  <i className="fa fa-filter"></i> Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        {renderCourses()}
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
    </div>
  );
}
