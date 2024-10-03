import React from "react";
import learnerOne from "../../../../assets/customersImgs/cust2.png";
import "./LearnerReviews.css";
import Rates from "../Rates/Rates";

const reviews = [
  {
    name: "Mark Doe",
    rate: "5",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    name: "Mark Doe",
    rate: "5",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    name: "Mark Doe",
    rate: "5",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];

export default function LearnerReviews() {
  return (
    <section className="learner-reviews-section">
      <h4 className=" mb-5 text-dark fw-bold">Learner Reviews</h4>
      <div className=" mt-3 learner-reviews-body">
        <div className=" learner_rate ">
          <div className="learner_rate_no">
            <i className=" fs-2 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-4 fw-bolder">4.6</span>
            <sub className=" ms-2 fs-5">146,951 reviews</sub>
          </div>
          <div className="mt-3">
            <Rates
              showCheckboxes={false}
              hasRatsioArray={["80%", "10%", "5%", "3%", "2%"].reverse()}
            />
          </div>
        </div>
        <div className="reviews-wrapper">
          <div className="reviews">
            {reviews.map(({ name, rate, date, review }, i) => (
              <div className="review" key={i}>
                <div className="review-header mb-2">
                  <img src={learnerOne} alt="learner" />
                  <div>
                    <h5 className="fw-bold mb-0">{name}</h5>
                    <div>
                      <i className="star fa-solid fa-star"></i>
                      <span className="fw-bolder me-3">{rate}</span>
                      <span
                        className="review_date"
                        style={{ fontStyle: "italic" }}
                      >
                        Reviewed on {date}
                      </span>
                    </div>
                  </div>
                </div>
                <p>{review}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-dark py-2 px-4">
            View more Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
