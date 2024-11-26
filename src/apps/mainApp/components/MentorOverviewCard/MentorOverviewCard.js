import React from "react";
import { Link } from "react-router-dom";

export default function MentorOverviewCard({ mentor = {} }) {
  const { _id, fname, lname, headline, photo, chatId } = mentor;
  return (
    <div className="h-100">
      {/* className="teacher-wrapper " */}
      <figure className="teacher box h-100  p-3 mb-0 text-start">
        <Link
          to={`/mentors/${_id}`}
          className=" overflow-hidden"
          style={{ borderRadius: "inherit" }}
        >
          <img src={photo} alt="mentor-profile" className="mb-3" />
        </Link>
        <fieldset className=" text-center mt-3">
          <h5 className="fw-bold text-capitalize">
            {fname} {lname}
          </h5>
          <h6 className=" fs-6">{headline}</h6>
          <Link
            to={`/profile/chats/${chatId}`}
            className="btn btn-primary mt-2"
          >
            Send Message
            <i className="fa-regular fa-envelope"></i>
          </Link>
        </fieldset>
      </figure>
    </div>
  );
}
