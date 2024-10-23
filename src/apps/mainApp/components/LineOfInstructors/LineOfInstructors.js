import React, { useEffect } from "react";
import "./LineOfInstructors.css";
import courseImage from "../../../../assets/mentorsImgs/mentor3.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopMentors } from "../../../../store/slices/topSlice";
import ScrollAnimatedSection from "../ScrollAnimatedFadeup/ScrollAnimatedFadeup";
import NoContent from "../../../../components/NoContent/NoContent";

export default function LineOfInstructors({ title }) {
  const {
    apiData: { results = [] },
    error,
  } = useSelector((state) => state.top.topMentors);

  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchTopMentors());
    },
    [dispatch]
  );

  const renderInstructors = () => {
    return results
      .slice(0, 5)
      .map(({ _id, photo, fname, headline, lname }, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-sm-12 gy-4">
          <ScrollAnimatedSection isFadeup={true}>
            <Link to={`/mentors/${_id}`}>
              <figure className="box d-flex flex-column align-items-center p-3 pb-0 mb-0">
                <div className="text-start mb-3 w-100 text-center">
                  <img
                    src={photo}
                    alt="profile-img"
                    className="img-fluid "
                    style={{ width: "350px", height: "350px" }}
                  />
                </div>
                <div className="text-center">
                  <h5 className="fw-bold text-capitalize">
                    {fname} {lname}
                  </h5>
                  <h6 className=" fs-6">{headline}</h6>
                </div>
                <div className="rate d-flex flex-wrap justify-content-between mt-4 ">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-star me-2 text-warning"></i>
                    <h6 className="mb-0 text-dark">5</h6>
                  </div>
                  <h6>Instructor</h6>
                </div>
              </figure>
            </Link>
          </ScrollAnimatedSection>
        </div>
      ));
  };

  return (
    <section className="line-of-instructors py-4">
      <div className="container">
        <header className="d-flex justify-content-between">
          <h2>{title}</h2>
          <Link to="#" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row d-flex justify-content-center">
          {error ? <NoContent /> : renderInstructors()}
        </div>
      </div>
    </section>
  );
}
