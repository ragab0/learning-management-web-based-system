import React from "react";
import { Link } from "react-router-dom";

export default function MentorOverviewCard({ mentor = {} }) {
  const { _id, fname, lname, headline, photo } = mentor;
  return (
    <div className="h-100">
      <Link
        to={`/mentors/${_id}`}
        className="teacher-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <figure className="teacher box h-100  p-3 mb-0 text-start">
          <div className=" overflow-hidden" style={{ borderRadius: "inherit" }}>
            <img src={photo} alt="mentor-profile" className="mb-3" />
          </div>
          <fieldset className=" text-center mt-3">
            <h5 className="fw-bold text-capitalize">
              {fname} {lname}
            </h5>
            <h6 className=" fs-6">{headline}</h6>
            <Link
              to={`/profile/messages/${_id}`}
              className="btn btn-primary mt-2"
            >
              Send Message
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </fieldset>
        </figure>
      </Link>
    </div>
  );
}
