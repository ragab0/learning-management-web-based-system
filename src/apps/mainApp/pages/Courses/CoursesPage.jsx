import React from "react";
import RateMenu from "./components/RateMenu/RateMenu";
import ChaptersMenu from "./components/ChaptersMenu/ChaptersMenu";
import PriceMenu from "./components/PriceMenu/PriceMenu";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import Courses from "./components/Courses/Courses";
import LineOfInstructors from "../../components/LineOfMentors/LineOfInstructors";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import "./CoursesPage.css";

export default function CoursesPage() {
  return (
    <div className="container mt-5 courses-page">
      <h1>Design Courses</h1>
      <h3 className="mt-4">All Development Courses</h3>
      <div className="d-flex justify-content-between mt-5 mb-4">
        <div className="filter">
          <button className="btn btn-light border-black p-2 ps-4 pe-4">
            <i className="fa-solid fa-filter"></i> Filter
          </button>
        </div>
        <div className="sort d-flex dropdown">
          <h6 className="text-dark d-flex align-items-center p-2 pe-4">
            Sort By
          </h6>
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
            <i className="fa-solid fa-angle-down ps-2"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="d-flex flex-column flex-wrap">
            <RateMenu />
            <ChaptersMenu />
            <PriceMenu />
            <CategoryMenu />
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <Courses />
        </div>
        <LineOfInstructors title="Popular Mentors" />
        <br />
        <br />
        <LineOfCourses title="Featured Courses" />
      </div>
    </div>
  );
}
