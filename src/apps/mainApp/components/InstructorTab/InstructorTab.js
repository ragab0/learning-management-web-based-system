import React from "react";
import "./InstructorTab.css";
import { Link } from "react-router-dom";
import MarkDownReadOnly from "../../../dashboardApp/components/MarkDown/MarkDownReadOnly";

export default function InstructorTab({
  mentor = {},
  fullDescription = false,
}) {
  const { fname, lname, headline, photo, _id, description } = mentor;

  return (
    <div className="instructor-tab">
      <h4 className=" text-dark fw-bold">Instructor</h4>
      <div className="ins_info">
        <Link to={`/mentors/${_id}`} className="rounded-circle overflow-hidden">
          <img src={photo} alt="instructor" />
        </Link>
        <div className="ins_details ms-4">
          <Link
            to={`/mentors/${_id}`}
            className="d-block mb-1 fw-bolder text-primary fs-5 text-capitalize d-inline-block"
          >
            {fname + " " + lname}
          </Link>
          <h5 className="fs-6">{headline}</h5>
        </div>
      </div>
      {fullDescription ? (
        <div className="mt-4">
          <MarkDownReadOnly source={description} />
        </div>
      ) : (
        <p className="mt-4">
          By joining our LMS as an instructor,{" "}
          <span className=" d-inline-block text-capitalize">
            {fname} {lname}
          </span>{" "}
          brings his wealth of knowledge, extensive teaching experience.
          Students will have the opportunity to learn from one of the most
          respected names, benefiting from his practical insights, clear
          teaching style, and years of industry experience.
        </p>
      )}
    </div>
  );
}
