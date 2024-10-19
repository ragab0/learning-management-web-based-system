import React from "react";
import "./ReviewsStats.css";
import { reviewsData } from "../../../../data/dashStats";
import Skeleton from "react-loading-skeleton";

export default function ReviewsStatas({ isSkels }) {
  if (isSkels) return <Skels />;

  return (
    <section className="dash-reviews-stast">
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

function Skels() {
  return (
    <section className="dash-reviews-stast">
      {[...Array(6)].map((s, i) => (
        <article className="review-badge dashboard-box">
          <Skeleton height={100} />
        </article>
      ))}
    </section>
  );
}
