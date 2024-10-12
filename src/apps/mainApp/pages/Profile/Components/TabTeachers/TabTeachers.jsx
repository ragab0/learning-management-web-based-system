import React from "react";
import "./TabTeachers.css";
import Teacher from "../../../../../../assets/mentorsImgs/mentor3.png";
import { Link } from "react-router-dom";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";

const teachersData = [
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
];

export default function TabTeachers() {
  return (
    <div className="tab-my-teachers">
      <div className="row">
        {teachersData.map((teacher, index) => (
          <Link
            to={`/mentors/${index}`}
            key={index}
            className="teacher-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <figure className="teacher box h-100  p-3 mb-0 text-start">
              <div>
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="img-fluid mb-3"
                />

                <h5 className="fw-bold">{teacher.name}</h5>
                <h6 className=" fs-6">{teacher.role}</h6>
              </div>
              <Link to={`chat/${index}`} className="btn btn-primary mt-4">
                Send Message
                <i className="fa-regular fa-envelope"></i>
              </Link>
            </figure>
          </Link>
        ))}
        <PaginationMain />
      </div>
    </div>
  );
}
