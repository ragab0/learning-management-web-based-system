import React from "react";
import "./PopularMentors.css";
import courseImage from "../../../../assets/mentorsImgs/mentor3.png";
import { instructors } from "../../../../data/dummyData";

export default function PopularMentors() {
  const renderInstructors = () => {
    let instructorCards = [];
    for (let i = 0; i < Math.min(5, instructors.length); i++) {
      const instructor = instructors[i];
      instructorCards.push(
        <div className="col-lg-2 col-md-5 col-sm-6 m-3" key={i}>
          <div className="box d-flex flex-column align-items-center p-3 pb-0">
            <div className="text-start mb-3 w-100">
              <img
                src={instructor.imgSrc ? instructor.imgSrc : courseImage}
                alt={instructor.name}
                className="img-fluid"
              />
            </div>
            <div className="text-center">
              <p className="text-dark mb-1">{instructor.name}</p>
              <h6>{instructor.jobTitle}</h6>
            </div>
            <div className="rate d-flex flex-wrap justify-content-between mt-4 divide">
              <div className="d-flex flex-wrap">
                <i className="fa-solid fa-star"></i>
                <h6 className="mb-0 text-dark">{instructor.totalRating}</h6>
              </div>
              <h6>{instructor.totalStudentsCount} Students</h6>
            </div>
          </div>
        </div>
      );
    }
    return instructorCards;
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex flex-wrap">
          <div className="col-12 mb-1">
            <h2>Popular Mentors</h2>
          </div>
          {renderInstructors()}
        </div>
      </div>
    </div>
  );
}
