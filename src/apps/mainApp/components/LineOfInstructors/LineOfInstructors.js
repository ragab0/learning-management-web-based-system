import React from "react";
import "./LineOfInstructors.css";
import courseImage from "../../../../assets/mentorsImgs/mentor3.png";
import { instructors } from "../../../../data/dummyData";
import { Link } from "react-router-dom";

export default function LineOfInstructors({ title }) {
  const renderInstructors = () => {
    return instructors.slice(0, 5).map((instructor, i) => (
      <div key={i} className="col-lg-2 col-md-4 col-sm-6 mb-4">
        <Link to={`/mentors/${i}`}>
          <figure className="box d-flex flex-column align-items-center p-3 pb-0 mb-0">
            <div className="text-start mb-3 w-100">
              <img
                src={instructor.imgSrc ? instructor.imgSrc : courseImage}
                alt={instructor.name}
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="text-center">
              <p className="text-dark mb-1">{instructor.name}</p>
              <h6>{instructor.jobTitle}</h6>
            </div>
            <div className="rate d-flex flex-wrap justify-content-between mt-4 divide">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-star me-2 text-warning"></i>
                <h6 className="mb-0 text-dark">{instructor.totalRating}</h6>
              </div>
              <h6>{instructor.totalStudentsCount} Students</h6>
            </div>
          </figure>
        </Link>
      </div>
    ));
  };

  return (
    <section className="line-of-instructors py-4">
      <div className="container">
        <header className="d-flex justify-content-between mb-3">
          <h2>{title}</h2>
          <Link to="#" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row d-flex justify-content-center">
          {renderInstructors()}
        </div>
      </div>
    </section>
  );
}
