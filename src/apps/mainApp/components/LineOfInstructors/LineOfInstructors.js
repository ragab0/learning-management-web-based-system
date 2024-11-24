import React, { useEffect } from "react";
import "./LineOfInstructors.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopMentors } from "../../../../store/slices/topSlice";
import NoContent from "../../../../components/NoContent/NoContent";
import Skeleton from "react-loading-skeleton";
import ScrollAnimations from "../ScrollAnimations/ScrollAnimations";

export default function LineOfInstructors({ title }) {
  const dispatch = useDispatch();
  const {
    apiData: { results = [] },
    error,
    loading,
    isInitialized,
  } = useSelector((state) => state.top.topMentors);

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
        <ScrollAnimations
          animationName="cardSprintToDown"
          delay={0.1 * i}
          key={i}
          className="col-lg-4 col-md-6 col-sm-12 gy-4"
        >
          <Link to={`/mentors/${_id}`} className="d-block h-100 ">
            <figure
              className="box d-grid p-3 pb-0 mb-0 h-100"
              style={{ gridTemplateRows: "1fr auto" }}
            >
              <div className="d-grid" style={{ gridTemplateRows: "1fr auto" }}>
                <div className="text-start mb-3 w-100 text-center">
                  <img src={photo} alt="profile-img" className=" h-full" />
                </div>
                <div className="text-center">
                  <h5 className="fw-bold text-capitalize">
                    {fname} {lname}
                  </h5>
                  <h6 className=" fs-6">{headline}</h6>
                </div>
              </div>
              <div className="rate d-flex flex-wrap justify-content-between mt-4 ">
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fa-solid fa-star me-1 text-warning"
                    ></i>
                  ))}
                </div>
                <h6>Instructor</h6>
              </div>
            </figure>
          </Link>
        </ScrollAnimations>
      ));
  };

  return (
    <section className="line-of-instructors py-4">
      <div className="container">
        <header className="d-flex justify-content-between">
          <h2>{title}</h2>
        </header>
        <div className="row d-flex justify-content-center">
          {!isInitialized || loading ? (
            [...Array(3)].map((_, i) => (
              <ScrollAnimations
                className="col-lg-4 col-md-6 col-sm-12 gy-4"
                animationName="cardSprintToDown"
                delay={0.1 + 0.1 * i}
              >
                <Skel key={i} />
              </ScrollAnimations>
            ))
          ) : error ? (
            <NoContent style={{ marginBlock: "100px" }} />
          ) : (
            renderInstructors()
          )}
        </div>
      </div>
    </section>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height="350px" />
      <Skeleton height={30} count={2} />
    </div>
  );
}
