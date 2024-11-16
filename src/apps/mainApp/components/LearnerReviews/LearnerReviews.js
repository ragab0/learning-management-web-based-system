import React, { useEffect } from "react";
import "./LearnerReviews.css";
import Reviews from "../../../../components/Reviews/Reviews";
import NoContent from "../../../../components/NoContent/NoContent";
import Loader from "../../../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseReviews } from "../../../../store/slices/reviewsSlice";
import { useParams } from "react-router-dom";
import StarLight from "../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../assets/svgsComps/StarDark";

export default function LearnerReviews() {
  const { courseId } = useParams();

  const dispatch = useDispatch();
  const {
    apiData: { results = {} },
    loading,
    isInitialized,
  } = useSelector((state) => state.reviews.courseReviews);
  const { reviews = [], statics = {} } = results;

  useEffect(
    function () {
      dispatch(fetchCourseReviews({ id: courseId }));
    },
    [dispatch, courseId]
  );

  if (!reviews.length) {
    return <NoContent />;
  }

  if (!isInitialized && loading) {
    return <Loader />;
  }

  //   {
  //     "averageRating": 3.5,
  //     "totalReviews": 2,
  //     "ratingDistribution": [
  //         {
  //             "count": 1,
  //             "rating": 4,
  //             "percentage": "50.00"
  //         },
  //         {
  //             "count": 1,
  //             "rating": 3,
  //             "percentage": "50.00"
  //         }
  //     ]
  // }

  const { averageRating, totalReviews, ratingDistribution = [] } = statics;

  return (
    <section className="learner-reviews-section">
      <h4 className=" mb-4 text-dark fw-bold">Learner Reviews</h4>
      <div className=" mt-3 learner-reviews-body gap-2 row-gap-4">
        <div className=" learner_rate ">
          <div className="learner_rate_no">
            <i className=" fs-2 star fa-solid fa-star"></i>
            <span className=" ms-2 fs-4 fw-bolder">{averageRating}</span>
            <sub className=" ms-2 fs-5">{totalReviews} reviews</sub>
          </div>
          <div className="mt-3 d-flex flex-column-reverse">
            <Rates ratesStats={ratingDistribution} />
          </div>
        </div>
        <div className="reviews-wrapper">
          <Reviews list={reviews} />
          <button className="btn btn-outline-dark py-2 px-4 COMING">
            View more Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

function Rates({ ratesStats = [] }) {
  return [...new Array(5)].map((_, i) => (
    <div key={i} className="rate-wrapper d-flex align-items-center gap-2">
      <span className="rate d-flex gap-1 align-items-center">
        {[...new Array(5)].map((_, j) => (
          <span key={j}>{j <= i ? <StarLight /> : <StarDark />}</span>
        ))}
      </span>
      {
        <span className="textdark h6 mb-0">
          {parseInt(
            ratesStats.find((r) => r.rating === i + 1)?.percentage || "0"
          ).toFixed(0)}
          %
        </span>
      }
    </div>
  ));
}
