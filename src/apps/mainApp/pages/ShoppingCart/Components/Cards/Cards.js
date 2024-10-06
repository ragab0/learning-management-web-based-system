import React from "react";
import "./Cards.css";
import courseImg from "../../../../../../assets/course2.png";
import { Link } from "react-router-dom";

export default function Cards({ cards = [] }) {
  if (!cards.length) {
    return <div className="no-content"></div>;
  }

  function saveHandler() {}

  function removeHandler() {}

  return (
    <div className="cards">
      {cards.map(
        ({ title, price, author, rating, totalRatings, details }, index) => (
          <div to="#" className="theCourse" key={index}>
            <Link to="#" className="theCourseImg">
              <img src={courseImg} alt={`${title} course`} />
            </Link>
            <div className="theCourseContent ms-2">
              <div className="course-price d-flex justify-content-between">
                <Link to="#">
                  <h5 className="d-block text-black">{title}</h5>
                </Link>
                <h5 className="text-black fw-bolder fs-4">${price}</h5>
              </div>
              <h6>By {author}</h6>
              <div className="details mb-2">
                <span className="rate me-2">{rating}</span>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="me-1 fa-solid fa-star"></i>
                ))}
                <span className="rateDetails me-2">
                  ({totalRatings} ratings)
                </span>
                <span className="courseDetails">{details}</span>
              </div>
              <div className="courseBtn">
                <button
                  className="btn1 btn border-0 ps-0"
                  type="button"
                  onClick={saveHandler}
                >
                  Save for later
                </button>
                <button
                  className="btn text-danger border-0"
                  type="button"
                  onClick={removeHandler}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
