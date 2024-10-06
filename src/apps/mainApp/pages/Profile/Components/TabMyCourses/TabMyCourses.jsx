import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TabMyCourses.css";
import { myCourses } from "../../../../../../data/dummyData";
import courseImage from "../../../../../../assets/course1.png";
import FilterOptions from "../FilterOptions/FilterOptions";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import StarLight from "../../../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../../../assets/svgsComps/StarDark";

export default function TabMyCourses() {
  const [currentPage] = useState(1);
  const coursesPerPage = 6;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = myCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(myCourses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="tab-my-courses">
      <header className="header col-12">
        <h2>
          Courses<span className="ms-2 fs-5">({myCourses.length})</span>
        </h2>
        <FilterOptions />
      </header>
      <div className="row">
        {currentCourses.map((course, index) => (
          <Link
            to={`/study/${index}`}
            className="col-xl-4 col-lg-6 col-md-12 mb-4"
            key={index}
          >
            <figure className="box h-100  p-3 mb-0 text-start">
              <div>
                <img
                  src={course.imgSrc || courseImage}
                  alt={course.name || "Course Image"}
                  className="img-fluid mb-3"
                />
                <h5 className=" fw-bold">
                  {course.title || "Untitled Course"}
                </h5>
              </div>
              <fieldset>
                <h6 className=" text-capitalize">
                  by {course.instructorName || "Unknown Instructor"}
                </h6>
                <div className="progress w-100 my-3" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${course.progress || 50}%` }}
                    aria-valuenow={course.progress || 50}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="rate d-flex align-items-center flex-wrap mt-2">
                  {course.rating > 0 && (
                    <>
                      {[...Array(5)].map((_, i) =>
                        course.ratingCount && Math.ceil(course.rating) ? (
                          <StarLight key={i} />
                        ) : (
                          <StarDark key={i} />
                        )
                      )}
                      <h6 className="mb-0 ms-2">
                        ({course.ratingCount || 0} Ratings)
                      </h6>
                    </>
                  )}
                </div>
              </fieldset>
            </figure>
          </Link>
        ))}
        <PaginationMain />
      </div>
    </div>
  );
}
