import React from "react";
import "./ReviewsStats.css";
import { reviewsData } from "../../../../data/dashStats";
import Skeleton from "react-loading-skeleton";

export default function ReviewsStatas({ isSkels }) {
  if (!isSkels) return <Skels />;

  return (
    <section className="dash-reviews-stast row">
      {reviewsData.map(({ title, count }, i) => (
        <article className="review-badge dashboard-box col-4">
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
    <section className="row">
      {[...Array(6)].map((s, i) => (
        <div className="col">
          <Skeleton height={100} />
        </div>
      ))}
    </section>
  );
}
