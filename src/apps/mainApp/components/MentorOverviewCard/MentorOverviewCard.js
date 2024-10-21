import React from "react";
import { Link } from "react-router-dom";

export default function MentorOverviewCard({ mentor = {} }) {
  const { _id, fname, lname, headline, photo } = mentor;
  return (
    <div>
      <Link
        to={`/mentors/${_id}`}
        className="teacher-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <figure className="teacher box h-100  p-3 mb-0 text-start">
          <div>
            <img src={photo} alt="mentor-profile" className="img-fluid mb-3" />
          </div>
          <fieldset className=" text-center">
            <h5 className="fw-bold text-capitalize">
              {fname} {lname}
            </h5>
            <h6 className=" fs-6">{headline}</h6>
            <Link to={`.`} className="btn btn-primary mt-2 COMING">
              Send Message
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </fieldset>
        </figure>
      </Link>
    </div>
  );
}
