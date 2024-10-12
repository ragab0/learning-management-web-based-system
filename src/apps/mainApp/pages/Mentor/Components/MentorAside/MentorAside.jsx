import React from "react";
import "./MentorAside.css";
import { Link } from "react-router-dom";
import MentorImg from "../../../../../../assets/mentorsImgs/mentor2.png";

export default function MentorAside() {
  return (
    <aside className="aside mentor-aside">
      <div className="aside-content text-center">
        <div className="img-wrapper">
          <img alt="profile-img" src={MentorImg} />
        </div>
        <ul className="d-flex flex-column gap-2">
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Website
            </Link>
          </li>
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Linkedin
            </Link>
          </li>
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
