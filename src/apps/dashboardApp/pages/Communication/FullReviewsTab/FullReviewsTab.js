import React from "react";
import "./FullReviewsTab.css";
import Reviews from "../../../../../components/Reviews/Reviews";
import { reviewsData } from "../../../../../data/reviewsData";

export default function FullReviewsTab() {
  return (
    <div className="dash-full-reviews-tab">
      <Reviews list={[...reviewsData, ...reviewsData, ...reviewsData]} />
    </div>
  );
}
