import React from "react";
import "./Reviews.css";
import StarLight from "../../assets/svgsComps/StarLight";
import StarDark from "../../assets/svgsComps/StarDark";

export default function Reviews({ list, limit }) {
  return (
    <div className="reviews">
      {list.map(
        (
          {
            courseName,
            rating,
            reviewerName,
            date,
            reviewText,
            profileIconSrc,
            senderName,
          },
          i
        ) => (
          <article key={i} className="review-container dashboard-box my-4">
            <div className="rating-wrapper">
              <span className="rating-label">Rating:</span>
              <span className="rate d-flex gap-1 align-items-center">
                {[...new Array(5)].map((_, j) =>
                  j < rating ? <StarLight key={j} /> : <StarDark key={j} />
                )}
              </span>
            </div>
            <div className="course-info">
              <span className="course-label">Course Name:</span>
              <h4 className="course-name h6">{courseName}</h4>
            </div>
            <div className="reviewer-info">
              <div className="reviewer-details">
                <div className="img-wrapper">
                  <img
                    src={profileIconSrc}
                    alt="profile-img"
                    className="reviewer-avatar"
                  />
                </div>
                <div className="reviewer-name-date">
                  <span className="reviewer-name text-capitalize">
                    {senderName}
                  </span>
                  <time className="review-date">{date}</time>
                </div>
              </div>
            </div>
            <p className="review-text">{reviewText}</p>
          </article>
        )
      )}
    </div>
  );
}
