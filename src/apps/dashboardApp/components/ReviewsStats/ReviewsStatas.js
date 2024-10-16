import React from "react";
import "./ReviewsStats.css";
import { reviewsData } from "../../../../data/dashStats";

export default function ReviewsStatas() {
  return (
    <section className="dash-reviews-stast d-flex gap-2">
      {reviewsData.map(({ title, count }, i) => (
        <article className="review-badge dashboard-box">
          <div className="review-content">
            <div className="review-label">{title}</div>
            <div className="review-stats">
              <div className="review-count">{count}</div>
              {i !== 0 && <div className="review-rating">{i}</div>}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
