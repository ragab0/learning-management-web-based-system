import React from "react";
import "./LearnerReviews.css";
import Rates from "../Rates/Rates";
import Reviews from "../../../../components/Reviews/Reviews";
import { reviewsData } from "../../../../data/reviewsData";

export default function LearnerReviews() {
  return (
    <section className="learner-reviews-section">
      <h4 className=" mb-4 text-dark fw-bold">Learner Reviews</h4>
      <div className=" mt-3 learner-reviews-body">
        <div className=" learner_rate ">
          <div className="learner_rate_no">
            <i className=" fs-2 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-4 fw-bolder">4.6</span>
            <sub className=" ms-2 fs-5">146,951 reviews</sub>
          </div>
          <div className="mt-3 d-flex flex-column-reverse">
            <Rates
              showCheckboxes={true}
              hasRatsioArray={["80%", "10%", "5%", "3%", "2%"].reverse()}
            />
          </div>
        </div>
        <div className="reviews-wrapper">
          <Reviews list={reviewsData.slice(0, 4)} />
          <button className="btn btn-outline-dark py-2 px-4">
            View more Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
