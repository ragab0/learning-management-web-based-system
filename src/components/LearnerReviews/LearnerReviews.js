import React from "react";
import learnerOne from "../../assets/customersImgs/cust2.png";
import "./LearnerReviews.css";

export default function LearnerReviews() {
  return (
    <section className="learner-reviews-section container">
      <h4 className=" mb-5 text-dark fw-bold">Learner Reviews</h4>
      <div className=" mt-3 learner_reviews">
        <div className=" learner_rate ">
          <div className="learner_rate_no">
            <i className=" fs-2 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-4 fw-bolder">4.6</span>
            <sub className=" ms-2 fs-5">146,951 reviews</sub>
          </div>
          <div className=" mt-3 five_stars">
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-6">80%</span>
          </div>
          <div className=" mt-2 four_stars">
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-6">10%</span>
          </div>
          <div className=" mt-2 three_stars">
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-6">5%</span>
          </div>
          <div className=" mt-2 two_stars">
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-6">3%</span>
          </div>
          <div className=" mt-2 four_stars">
            <i className=" me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <i className=" star_empty me-1 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-6">2%</span>
          </div>
        </div>
        <div className="theLearners">
          <div className="learner_comments">
            <div className="learner1">
              <div className="learner_img_name">
                <img src={learnerOne} alt="learner1" />
                <span className=" fw-bold ms-3">Mark Doe</span>
              </div>
              <div className="learner1_comment">
                <div className="learner1_rate">
                  <i className=" fs-6 star fa-solid fa-star"></i>
                  <span className=" ms-1 fs-6 fw-bolder">5</span>
                  <span className=" ms-5 review_date">
                    Reviewed on 22nd March, 2024
                  </span>
                  <div className="learner1_paragraph">
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learner1">
              <div className="learner_img_name">
                <img src={learnerOne} alt="learner1" />
                <span className=" fw-bold ms-3">Mark Doe</span>
              </div>
              <div className="learner1_comment">
                <div className="learner1_rate">
                  <i className=" fs-6 star fa-solid fa-star"></i>
                  <span className=" ms-1 fs-6 fw-bolder">5</span>
                  <span className=" ms-5 review_date">
                    Reviewed on 22nd March, 2024
                  </span>
                  <div className="learner1_paragraph">
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learner1">
              <div className="learner_img_name">
                <img src={learnerOne} alt="learner1" />
                <span className=" fw-bold ms-3">Mark Doe</span>
              </div>
              <div className="learner1_comment">
                <div className="learner1_rate">
                  <i className=" fs-6 star fa-solid fa-star"></i>
                  <span className=" ms-1 fs-6 fw-bolder">5</span>
                  <span className=" ms-5 review_date">
                    Reviewed on 22nd March, 2024
                  </span>
                  <div className="learner1_paragraph">
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
