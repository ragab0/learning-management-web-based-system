import React from "react";
import "./Reviews.css";
import StarLight from "../../assets/svgsComps/StarLight";
import StarDark from "../../assets/svgsComps/StarDark";
import ProfileImg from "../ProfileImg/ProfileImg";

export default function Reviews({ list, limit }) {
  return (
    <div className="reviews">
      {list.map(
        (
          {
            course: { title },
            student: { fname, lname, photo },
            createdAt,
            rating,
            review,
          },
          i
        ) => (
          <article key={i} className="review-container dashboard-box my-4">
            <div className="rating-wrapper">
              <span className="rating-label">Rating:</span>
              <span className="rate d-flex gap-1 align-items-center">
                {[...new Array(5)].map((_, j) => (
                  <span key={j}>
                    {j < rating ? <StarLight /> : <StarDark />}
                  </span>
                ))}
              </span>
            </div>
            <div className="course-info">
              <span className="course-label">Course Name:</span>
              <h4 className="course-name h6">{title}</h4>
            </div>
            <div className="reviewer-info">
              <div className="reviewer-details">
                <ProfileImg photo={photo} fL={fname[0]} lL={lname[0]} />
                <div className="reviewer-name-date">
                  <span className="reviewer-name text-capitalize">
                    {fname} {lname}
                  </span>
                  <time className="review-date">
                    {new Date(createdAt).toLocaleString()}
                  </time>
                </div>
              </div>
            </div>
            <p className="review-text">{review || "Without comment..."}</p>
          </article>
        )
      )}
    </div>
  );
}
