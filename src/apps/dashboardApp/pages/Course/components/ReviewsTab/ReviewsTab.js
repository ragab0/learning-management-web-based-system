import React from "react";
import "./ReviewsTab.css";
import ReviewsStats from "../../../../components/ReviewsStats/ReviewsStatas";
import Reviews from "../../../../../../components/Reviews/Reviews";
import { reviewsData } from "../../../../../../data/reviewsData";

export default function ReviewsTab() {
  return (
    <div className="course-review-tab">
      <ReviewsStats />
      <Reviews list={reviewsData} />
    </div>
  );
}
