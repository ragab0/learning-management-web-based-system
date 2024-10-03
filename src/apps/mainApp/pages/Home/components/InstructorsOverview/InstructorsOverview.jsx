import React from "react";
import inst1 from "../../../../../../assets/mentorsImgs/mentor10.png";
import inst2 from "../../../../../../assets/mentorsImgs/mentor11.png";
import "./InstructorsOverview.css";
import { Link } from "react-router-dom";

const instructorsOverviews = [
  {
    img: inst1,
    title: "Become an Instructor",
    desc: "Instructors from around the world teach millions of students on LMS-Depi. We provide the tools and skills to teach what you love.",
    more: "Start Your Instructor Journey",
  },
  {
    img: inst2,
    title: "Transform your life through education",
    desc: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
    more: "Checkout Courses",
  },
];

export default function InstructorsOverview() {
  return (
    <div className="instructors-overviews">
      <div className="container">
        {instructorsOverviews.map(({ img, title, desc, more }, i) => (
          <section key={i} className="mb-5">
            <div
              className={`container row align-items-center justify-content-between ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="col-4">
                <img src={img} alt="instructor-overview" />
              </div>
              <div className="header-content">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link
                  to={i / 2 === 0 ? "/dashboard/signup" : "/courses"}
                  className="btn btn-dark p-3 ps-4 pe-4"
                >
                  {more}
                  <i className="fa-solid fa-arrow-right ps-2"></i>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
